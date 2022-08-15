import { Site } from "src/entity/site.entity";
import {  EntityRepository, Repository } from "typeorm";
import { TREE_KEY, TREE_KEY_SEPARATOR } from "./decorator.constant";
import { ITreeCompleteMetadata } from "./decorator.interface";

@EntityRepository(Site)
export class CustomRepo extends Repository<Site>{
    public findMeta(){
        return this.metadata[TREE_KEY]
    }
}

export const FindNodes = async function (
        target: Function | Function[],
        relation?: 'parent' | 'child' | undefined,
        prefix?: string,
      ) {
        let keys = Reflect.getMetadataKeys(target['prototype']);

        console.log('Keys', keys);

        if (keys.length < 1) {
          return [];
        }

        // Find keys to get relation key
        let relations: ITreeCompleteMetadata[] = [];
        // Filter the relations and get the metadata
        keys.forEach((value: string) => {
          let data = value.split(TREE_KEY_SEPARATOR);
          if (data.length == 2) {
            let meta = Reflect.getMetadata(value, target['prototype']);
            relations.push({
              ...meta,
            });
          }
        });

        // relations string to be returned
        let rel: string[] = [];
        // next relation to search
        let nodes: Function[] = [];

        relations = relations.filter((key: ITreeCompleteMetadata) => {
          if (relation ? key.type == relation : true) {
            rel = rel.concat(prefix ? `${prefix}${key.key}` : key.key);
            nodes = nodes.concat(key.nodes);

            return true;
          }
        });


        // recursively find any other relations
        if (nodes.length > 0) {
          let result = await Promise.all(
            relations.map((node) =>
              FindNodes(
                node.nodes,
                node.type,
                prefix ? `${prefix}${node.key}` : node.key + '.',
              ),
            ),
          );
          
          // removing undefined
          result = result.filter((val) => {
            return val.length > 0;
          });

          // join everything we found
          return rel.concat(result.map((value) => value[0]));
        } else {
          return rel;
        }
      };
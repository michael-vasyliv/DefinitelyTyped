import AtlasManager from './AtlasManager';
import Fill from './Fill';
import RegularShape from './RegularShape';
import Stroke from './Stroke';

export interface Options {
    fill?: Fill | undefined;
    radius: number;
    stroke?: Stroke | undefined;
    atlasManager?: AtlasManager | undefined;
}
export default class CircleStyle extends RegularShape {
    constructor(opt_options?: Options);
    setRadius(radius: number): void;
}

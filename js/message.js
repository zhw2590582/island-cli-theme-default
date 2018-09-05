import Gitting from 'gitting';
import { setTitle } from "./utils";
import "../sass/pages";
import "../sass/message";
import "gitting/dist/gitting.css";
import { web } from "../../../data/config"

setTitle('留言');
const gitting = new Gitting(web.gitting);
gitting.render('#gitting-container');

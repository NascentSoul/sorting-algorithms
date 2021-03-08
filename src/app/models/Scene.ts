import { Light } from "./lights/Light";
import { Sphere } from "./Sphere";

export interface Scene {
  backgroundColor: [number, number, number],
  canvasToViewportDistance: number,
  viewportWidth: number,
  viewportHeight: number,
  spheres: Sphere[],
  lights: Light[]
}

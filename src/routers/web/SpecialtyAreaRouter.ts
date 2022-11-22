import AbstractRouter from '../AbstractRouter.js';

import SpecialtyAreaController from '../../controllers/web/SpecialtyArea/SpecialtyAreaController.js';
import SpecialtyAreasController from '../../controllers/web/SpecialtyArea/SpecialtyAreasController.js';
import { IRouter } from '../../abstracts/Contract.js';
import { RequestMethod } from '../../abstracts/Enum.js';

const specialtyAreaController = new SpecialtyAreaController();
const specialtyAreasController = new SpecialtyAreasController();

export default class SpecialtyAreaRouter extends AbstractRouter implements IRouter {
    constructor() {
        super();

        this.routes = [
            {
                route: '/specialty-area',
                controller: specialtyAreaController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/specialty-areas',
                controller: specialtyAreasController,
                requestMethod: RequestMethod.get
            },
            {
                route: '/specialty-areas',
                controller: specialtyAreasController,
                requestMethod: RequestMethod.post
            }
        ];

        this.setRouter();
    }
}
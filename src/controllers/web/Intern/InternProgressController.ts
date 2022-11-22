import WebController from '../WebController.js';
import { IController } from '../../../abstracts/Contract.js';

import InternView from '../../../views/intern/InternView.js';
import InternService from '../../../models/service/InternService.js';
import { InternProgress } from '../../../abstracts/entities/Intern.js';

import { NextFunction, Request, Response } from 'express';

export default class InternProgressController extends WebController implements IController {  
    protected async handleGet(req: Request, res: Response, next: NextFunction) {
        const internLoggedIn = this.isInternLoggedIn(req);

        if(!internLoggedIn) {
            return this.redirect({ 
                res, 
                page: '/intern-login', 
                errorCode: 400 
            });
        }      

        const internId = req.session.internId as number;
        
        const internService = new InternService();
        const internProgress: InternProgress =  await internService.getInternProgressById(internId);

        const internView = new InternView();
        internView
            .setInternProgress(internProgress)
            .setTemplate('./intern/intern-progress');

        this.renderPage(req, res, internView);
   }
}
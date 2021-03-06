import {Router} from 'express';
import * as GroupController from './controller';

const routes = new Router();


routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);
routes.post('/groups/:groupId/meetups/', GroupController.getGroupMeetup);

export default routes;
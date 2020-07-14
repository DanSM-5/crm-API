import { 
  addNewContact,
  getContacts, 
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, //(req, res, next) => {
      //res.send('GET request successful!');
    //}
    getContacts)

    // Post Endpoint
    .post(addNewContact);

  app.route('/contact/:contactID')

    // Get a specifict contact
    .get(getContactWithID)

    // Update a specifict contact
    .put(updateContact)
      
    // Delete a specifict contact
    .delete(deleteContact);
}

export default routes;
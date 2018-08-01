import Item from '../models/Item';

/*
* GET | List all Items
*/
export function list(req, h) {
  return Item.find({})
    .exec()
    .then(item => {
      return { items: item };
    })
    .catch(err => {
      return { err: err };
    });
}

/*
* POST | Post an Item
*/
export function create(req, h) {
  const newItem = {
    name: req.payload.name,
    quantity: req.payload.quantity
  };

  return Item.create(newItem)
    .then(item => {
      return { message: 'Item created sucessfully', item: item };
    })
    .catch(err => {
      return { err: err };
    });
}

/*
 * PUT | Update Item by ID
*/
export function update(req, h) {
  return Item.findById(req.params.id)
    .exec()
    .then(item => {
      if (!item) return { err: 'Item not found' };

      item.name = req.payload.name;
      item.quantity = req.payload.quantity;

      item.save(newItem);
    })
    .then(data => {
      return { message: 'Item updated successfully' };
    })
    .catch(err => {
      return { err: err };
    });
}

/*
 * DELETE | Delete Item by ID
 */
export function remove(req, h) {
  return Item.findById(req.params.id).exec((err, item) => {
    if (err) return { dberror: err };
    if (!item) return { message: 'Item not found' };

    item.remove(err => {
      if (err) return { dberror: err };

      return { success: true };
    });
  });
}




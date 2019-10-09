exports.fetchAll = (req, res) => {
    res.json({categories: [{title: 'Test Category'}]});
}
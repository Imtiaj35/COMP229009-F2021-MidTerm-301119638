/*++++++++++++++++++++++++++++++++++++++++++++++++++
     * File name: index.js
     * Student Name: Imtiaj Hossain
     * StudentID: 301119638
     * Web App name: COMP229-F2021-MidTerm-301119638
+++++++++++++++++++++++++++++++++++++++++++++++++++++*/
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

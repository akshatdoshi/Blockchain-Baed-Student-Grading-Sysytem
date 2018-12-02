exports.teacherIdCheckGet = function(req,res){
    res.render('login', { title: 'BlockChain' });
};

exports.adminget = function(req,res){
    res.render('adminlogin', { title: 'BlockChain' });
};

exports.error = function(req,res) {
  res.render('error',{title: 'error teacher'});
};
exports.error1 = function(req,res) {
  res.render('error1',{title: 'error admin'});
};
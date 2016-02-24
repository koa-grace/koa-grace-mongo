'use strict';

exports.index = function* () {
	let postModel = this.mongo('Post',{});

	var list = yield postModel.listPost();

    this.body = list;
}

exports.add = function* () {
	let postModel = this.mongo('Post',{title:'test1',author:'wilee1',content:'test1',tips:'t1'});

	let err = yield postModel.addPost();

    this.body = err || 'add success!';
}

exports.index.method = 'get';
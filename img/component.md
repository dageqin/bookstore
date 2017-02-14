## index页面

<div class="navbar navbar-inverse ">
    <div class="container-fluid">
        <!--logo-->
    <div class="navbar-header">
        <a class="navbar-brand" href="#!/home">
            BookStore
        </a>
        </div>
        <!--nav-->
<ul class="nav nav-pills text-center" role="tablist" style="margin-top: 5px">
    <li role="presentation" class="active"><a href="#!/home">首页</a></li>
    <li role="presentation"><a href="#!/list">列表页</a></li>
    <li role="presentation"><a href="#!/add">新增图书</a></li>
</ul>
    </div>
</div>


## /home

<div ng-bind-html="home"></div>

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox" >
        <div class="item active">
            <img src="img/1.jpg" alt="">
            <div class="carousel-caption">标题一
            </div>
        </div>
        <div class="item">
            <img src="img/2.jpg" alt="">
            <div class="carousel-caption">标题二
            </div>
        </div>
    </div>
</div>

在index页面需要js：$('.carousel').carousel({
                     interval: 2000
                 });
                 
## /list

<div class="panel panel-default col-md-4 text-center" ng-repeat="book in bookList">
    <div class="panel-heading">{{book.bookName}}</div>
    <div class="panel-body">
        <img ng-src="{{book.bookCover}}" alt="" style="width: 250px;height: 300px">
    </div>
    <div class="panel-footer">{{book.bookPrice|currency:'￥'}}
        <a href="#!/detail/{{book.id}}">详情</a>
    </div>
</div>


## add
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="bookName"  class="col-sm-2 control-label">书名</label>
        <div class="col-sm-10">
            <input type="text" ng-model="book.bookName" class="form-control" id="bookName" placeholder="请输入书名">
        </div>
    </div>
    <div class="form-group">
        <label for="bookPrice" class="col-sm-2 control-label">价格</label>
        <div class="col-sm-10">
            <input type="text" ng-model="book.bookPrice" class="form-control" id="bookPrice" placeholder="请输入本书的单价">
        </div>
    </div>
    <div class="form-group">
        <label for="bookCover" class="col-sm-2 control-label">封面</label>
        <div class="col-sm-10">
            <input type="text" ng-model="book.bookCover" class="form-control" id="bookCover" placeholder="请输入本书的封面">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-default" ng-click="add()">添加</button>
        </div>
    </div>
</form>

## detail

<div class="panel panel-default col-md-4">
    <div ng-show="flag" class="panel-heading">{{book.bookName}}</div>
    <input ng-hide="flag" type="text" ng-model="book.bookName">
    <div class="panel-body">
        <img ng-src="{{book.bookCover}}" alt="">
    </div>
    <div ng-show="flag" class="panel-footer">{{book.bookPrice|currency:'￥'}}</div>
    <input ng-hide="flag" type="text" ng-model="book.bookPrice">
    <button class="btn btn-danger" ng-show="flag" ng-click="remove()">删除</button>
    <button class="btn btn-warning" ng-show="flag" ng-click="change()">修改</button>
    <button class="btn btn-default" ng-hide="flag" ng-click="update()">确定</button>
    <button class="btn btn-default" ng-hide="flag">取消</button>
</div>
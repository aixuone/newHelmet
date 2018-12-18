layui.config({
	base : "build/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form,
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;


		//看input
		
	//页面加载页面数据
	$(function(){
		$.ajax({
			type:"get",
			url:"build/js/newsList.json",
			async:true,
			datatype:'json',
			success:function(data){
				dealData(data);
			}
		});
		
		//处理数据的函数
		function dealData(data){
			//先判断是否没有数据
			if(typeof data != 'undefind'){
				//清空数据
				$(".news_content").empty();
				//遍历填充
				$.each(data, function(ind,obj) {
					var html='';
					html+='<tr>';
					html+='		<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose">';
					html+='			<div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>';
					html+='		</td>';
					html+='		<td align="left">'+obj.newsName+'</td>';
					html+='		<td>'+obj.newsAuthor+'</td>';
					html+='		<td style="color:#f00">'+obj.newsStatus+'</td>';
					html+='		<td>'+obj.newsLook+'</td>';
					
					html+='		<td><input type="checkbox" name="show" lay-skin="switch" lay-text="是|否" lay-filter="isShow" '+obj.isShow+'>';
					
					if(obj.isShow != 'checked'){
						html+='		<div class="layui-unselect layui-form-switch" lay-skin="_switch"><em>否</em><i></i></div>';
					}else{
						html+='		<div class="layui-unselect layui-form-switch layui-form-onswitch" lay-skin="_switch"><em>否</em><i></i></div>';
					}
					
					html+='	</td>';
					
						
					
					html+='		<td>'+obj.newsTime+'</td>';
					html+='		<td>';
					html+='			<a class="layui-btn layui-btn-xs news_edit"><i class="fa fa-edit"></i> 编辑</a>';
					html+='			<a class="layui-btn layui-btn-normal layui-btn-xs news_collect"><i class="fa fa-star"></i> 收藏</a>';
					html+='			<a class="layui-btn layui-btn-danger layui-btn-xs news_del" data-id="1"><i class="fa fa-trash"></i> 删除</a>';
					html+='		</td>';
					html+='	</tr>';
					$(".news_content").append(html);
				});
			}
		
			//分页
			  laypage.render({
			    elem: 'page' //注意，这里的 test1 是 ID，不用加 # 号
			    ,count: 30 //数据总数，从服务端得到
			    ,limit:10
			    ,curr: location.hash.replace('#!fenye=', '')
			    ,hash: 'fenye' //自定义hash值
			    ,jump: function(obj, first){
					    //obj包含了当前分页的所有参数，比如：
					    console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
					    console.log(obj.limit); //得到每页显示的条数
					    
					    //首次不执行
					    if(!first){
					      //do something
					    }
  }
			  });
		}
	})
	

})


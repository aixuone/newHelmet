layui.use(['table','jquery','util'], function() {
	//控件定义
	var table = layui.table,
		 $ = layui.$,//重点处
		 layer=layui.layer,
		 util=layui.util;
		 
		 var $=layui.jquery;
			
		 
	//以下为table的渲染，elem处写table的id,js可在下面table监听处写
	//方法级渲染
	table.render({
		elem: '#LAY_table_user',
		url: 'table.json',
		cols: [
			[{
				checkbox: true,
				fixed: true
			}, {
				field: 'id',
				title: 'ID',
				width: 80,
				sort: true,
				fixed: true 
			}, {
				field: 'username',
				title: '用户名',
				width: 80
			}, {
				field: 'sex',
				title: '性别',
				width: 80,
				sort: true
			}, {
				field: 'city',
				title: '城市',
				width: 80
			}, {
				field: 'sign',
				title: '签名',
				width: 80
			}, {
				field: 'experience',
				title: '积分',
				sort: true,
				width: 80
			}, {
				field: 'score',
				title: '评分',
				sort: true,
				width: 80
			}, {
				field: 'classify',
				title: '职业',
				width: 80
			}, {
				field: 'wealth',
				title: '财富',
				sort: true,
				width: 135
			}, {
				field: 'pic',
				title: '图片上传',
				sort: true,
				toolbar: '#pic_upload',
				width: 150
			}, {
				field: 'right',
				title: ' ',
				sort: true,
				align: 'center',
				toolbar: '#barDemo',
				width: 250
			}]
		],
		id: 'testReload',
		page: true,
		height: 550
	});

	//监听表格复选框选择
	table.on('checkbox(user)', function(obj) {
		//console.log(obj);
		//点击编辑的时候，表格就变出input框来
	});
	//监听工具条
	table.on('tool(user)', function(obj) {
		var data = obj.data;
		if(obj.event === 'detail') {
			layer.msg('ID：' + data.id + ' 的查看操作');
			
		} else if(obj.event === 'del') {
			layer.confirm('真的删除行么', function(index) {
				obj.del();
				layer.close(index);
			});
		} else if(obj.event === 'edit') {
			//layer.alert('编辑行：<br>' + JSON.stringify(data));
			//可以把当前这一行的数据清空
			console.log(data);
			for(var i=2;i<=9;i++){
				$(this).parent().parent().parent().find("td").eq(i).empty();
				
			}
			//将td,edit按钮，genggai按钮存储以备使用
			var li_td=$(this).parent().parent().parent().find("td");
			li_td.css("text-align","center");
			var li_edit=$(this).parent().parent().parent().find("td").eq(11).find(".li_edit");
			var li_genggai=$(this).parent().parent().parent().find("td").eq(11).find(".li_genggai");
			
			//给每一列的数据加上一个input框并赋值
			li_td.eq(2).append("<input value="+data.username+" class='input_add'/>");
			li_td.eq(3).append("<input value="+data.sex+" class='input_add'/>");
			li_td.eq(4).append("<input value="+data.city+" class='input_add'/>");
			li_td.eq(5).append("<input value="+data.sign+" class='input_add'/>");
			li_td.eq(6).append("<input value="+data.experience+" class='input_add'/>");
			li_td.eq(7).append("<input value="+data.score+" class='input_add'/>");
			li_td.eq(8).append("<input value="+data.classify+" class='input_add'/>");
			li_td.eq(9).append("<input value="+data.wealth+" class='input_add'/>");
			//给编辑的按钮加上新的class名称，并修改名字
			li_edit.addClass("layui-hide");
			li_genggai.removeClass("layui-hide");
			li_genggai.click(function(){
				//点击更改后，先储存现在所有的数据,此时的上传图片也应该写好
				var g_username=li_td.eq(2).find("input").val();
				var g_sex=li_td.eq(3).find("input").val();
				var g_city=li_td.eq(4).find("input").val();
				var g_sign=li_td.eq(5).find("input").val();
				var g_experience=li_td.eq(6).find("input").val();
				var g_score=li_td.eq(7).find("input").val();
				var g_classify=li_td.eq(8).find("input").val();
				var g_wealth=li_td.eq(9).find("input").val();
				//将数据写进td里
				li_td.eq(2).html(g_username);
				li_td.eq(3).html(g_sex);
				li_td.eq(4).html(g_city);
				li_td.eq(5).html(g_sign);
				li_td.eq(6).html(g_experience);
				li_td.eq(7).html(g_score);
				li_td.eq(8).html(g_classify);
				li_td.eq(9).html(g_wealth);
				li_edit.removeClass("layui-hide");
				li_genggai.addClass("layui-hide");
			});
			
			
			
		}
	});
	
	$('.demoTable .layui-btn').on('click', function() {
		var type = $(this).data('type');
		active[type] ? active[type].call(this) : '';
	});
	
	

});
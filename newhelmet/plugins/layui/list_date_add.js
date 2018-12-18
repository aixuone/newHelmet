layui.use(['jquery', 'laydate'], function() {
	var $ = layui.jquery,
		laydate = layui.laydate;

	//调用时间插件

	//调用单个时间插件，直接将id写于此
	laydate.render({
	   elem: '#laydate_s'
	 });
	

	//日期范围，将input的id写在这里，就可以调用带时间范围的laydate
	  laydate.render({
	    elem: '#test6'
	    ,range: true
	  });
	  
})
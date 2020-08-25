({
	doInit : function(component,event,helper){
        helper.setcolumnsHelper(component);   
        
        helper.fetchData(component);
    
		
	},
     handleSort : function(component,event,helper){
        var sortBy = event.getParam("fieldName");
        var sortDirection = event.getParam("sortDirection");
        component.set("v.sortBy",sortBy);
        component.set("v.sortDirection",sortDirection);
        //if(sortBy == 'doctorLink')
        //	sortBy = 'doctorName';
       // if(sortBy == 'accountLink')
        //	sortBy = 'accountName';
        
        helper.sortData(component,sortBy,sortDirection);
    }
   
})

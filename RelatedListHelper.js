({
	setcolumnsHelper : function(component) {
        
      var columns = [];
        
        if(component.get("v.field1Name")){
            
            var column1 = {
                label: component.get("v.field1Label"),
                fieldName: 'column1',
                type: component.get("v.field1Type"),
                sortable : true,
                initialWidth: component.get("v.field1Size"),
                typeAttributes: {label: { fieldName: 'column1_Url_Label' },
                                 target: '_self',
                                 year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
            };
            columns.push(column1);
        }
        
        if(component.get("v.field2Name")){
            var column2 = 
                {
                label: component.get("v.field2Label"),
                fieldName: 'column2',
                type: component.get("v.field2Type"),
                sortable : true,
                initialWidth: component.get("v.field2Size"),
                typeAttributes: {label: { fieldName: 'column2_Url_Label' },
                                 target: '_self',
                                 year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
            };
             columns.push(column2);
        }
        
        if(component.get("v.field3Name")){
            
            var column3 = 
                {
                label: component.get("v.field3Label"),
                fieldName: 'column3',
                type: component.get("v.field3Type"),
                sortable : true,
                initialWidth: component.get("v.field3Size"),
                typeAttributes: {label: { fieldName: 'column3_Url_Label' },
                                 target: '_self',
                                 year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
            };
             columns.push(column3);
        }
        
        if(component.get("v.field4Name")){
            var column4 = 
                {
                    label: component.get("v.field4Label"),
                    fieldName: 'column4',
                    type: component.get("v.field4Type"),
                    sortable : true,
                    initialWidth: component.get("v.field3Size"),
                    typeAttributes: {label: { fieldName: 'column4_Url_Label' },
                                     target: '_self',
                                     year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
                };
            columns.push(column4);
            
            
        }
         if(component.get("v.field5Name")){
            var column5 = 
                {
                    label: component.get("v.field5Label"),
                    fieldName: 'column5',
                    type: component.get("v.field5Type"),
                    sortable : true,
                    initialWidth: component.get("v.field3Size"),
                    typeAttributes: {label: { fieldName: 'column5_Url_Label' },
                                     target: '_self',
                                     year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
                };
            columns.push(column5);
            
            
        }
         if(component.get("v.field6Name")){
            var column6 = 
                {
                    label: component.get("v.field6Label"),
                    fieldName: 'column6',
                    type: component.get("v.field6Type"),
                    sortable : true,
                    initialWidth: component.get("v.field6Size"),
                    typeAttributes: {label: { fieldName: 'column6_Url_Label' },
                                     target: '_self',
                                     year: "numeric",
                                 month: "numeric",
                                 day: "2-digit"}
                };
            columns.push(column6);
            
            
        }
         if(component.get("v.field7Name")){
            var column7 = 
                {
                    label: component.get("v.field7Label"),
                    fieldName: 'column7',
                    type: component.get("v.field7Type"),
                    sortable : true,
                    initialWidth: component.get("v.field7Size"),
                    typeAttributes: {label: { fieldName: 'column7_Url_Label' },
                                     target: '_self',
                                     year: "numeric",
                                     month: "numeric",
                                     day: "2-digit"}
                };
             columns.push(column7);
            
            
        }
         if(component.get("v.field8Name")){
             console.log("pushing 8 !!!!!");
            var column8 = 
                {
                    label: component.get("v.field8Label"),
                    fieldName: 'column8',
                    type: component.get("v.field8Type"),
                    sortable : true,
                    initialWidth: component.get("v.field8Size"),
                    typeAttributes: {label: { fieldName: 'column8_Url_Label' },
                                     target: '_self',
                                     year: "numeric",
                                     month: "numeric",
                                     day: "2-digit"}
                };
             columns.push(column8);
             
            
        }
         if(component.get("v.field9Name")){
            var column9 = 
                {
                    label: component.get("v.field9Label"),
                    fieldName: 'column9',
                    type: component.get("v.field9Type"),
                    sortable : true,
                    initialWidth:component.get("v.field9Size"),
                    typeAttributes: {label: { fieldName: 'column9_Url_Label' },
                                     target: '_self'}
                };
            columns.push(column9);
        }
        
                
        component.set("v.columns",columns);
    },
    
     fetchData : function(component){
          var fieldList = [component.get("v.field1Name"),
                        component.get("v.field2Name"),
                        component.get("v.field3Name"),
                        component.get("v.field4Name"),
                        component.get("v.field5Name"),
                        component.get("v.field6Name"),
                        component.get("v.field7Name"),
                        component.get("v.field8Name"),
                        component.get("v.field9Name")];
         
        
        var action = component.get("c.getTableData");
         action.setParams({
             sObjectType : component.get("v.object"),
             fieldList : fieldList,
             parentId : component.get("v.recordId"),
             relationshipName : component.get("v.relationshipName"),
             andClause : component.get("v.andClause"),
         });
       // var toastReference = $A.get("e.force:showToast");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == "SUCCESS"){
                
                component.set("v.tableData", response.getReturnValue());
                console.log(JSON.stringify(response.getReturnValue()));
              
            }
        });
            $A.enqueueAction(action);
    },
     sortData : function(component,fieldName,sortDirection){
        var data = component.get("v.tableData");
        //function to return the value stored in the field
        var key = function(a) { return a[fieldName]; }
        var reverse = sortDirection == 'asc' ? 1: -1;
        data.sort(function(a,b){
            var a = key(a) ? key(a).toLowerCase() : '';//To handle null values , uppercase records during sorting
            var b = key(b) ? key(b).toLowerCase() : '';
            return reverse * ((a>b) - (b>a));
        });
        component.set("v.tableData",data);
    }
    
     
		
	
})

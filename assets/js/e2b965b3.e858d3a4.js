(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{273:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return i}));var b=a(3),r=a(8),n=(a(0),a(303)),p={},c={unversionedId:"api/interfaces/mock_src.imockstore",id:"api/interfaces/mock_src.imockstore",isDocsHomePage:!1,title:"mock_src.imockstore",description:"Interface: IMockStore",source:"@site/docs/api/interfaces/mock_src.imockstore.md",slug:"/api/interfaces/mock_src.imockstore",permalink:"/docs/api/interfaces/mock_src.imockstore",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/mock_src.imockstore.md",version:"current",sidebar:"someSidebar",previous:{title:"mock_src.imockserver",permalink:"/docs/api/interfaces/mock_src.imockserver"},next:{title:"utils_src.iresolvervalidationoptions",permalink:"/docs/api/interfaces/utils_src.iresolvervalidationoptions"}},m=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"schema",id:"schema",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"get",id:"get",children:[]},{value:"reset",id:"reset",children:[]},{value:"set",id:"set",children:[]}]}],l={toc:m};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interface-imockstore"},"Interface: IMockStore"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"../modules/mock_src"},"mock/src"),".IMockStore"),Object(n.b)("h2",{id:"implemented-by"},"Implemented by"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/api/classes/mock_src.mockstore"},Object(n.b)("em",{parentName:"a"},"MockStore")))),Object(n.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/api/interfaces/mock_src.imockstore#schema"},"schema"))),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/api/interfaces/mock_src.imockstore#get"},"get")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/api/interfaces/mock_src.imockstore#reset"},"reset")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docs/api/interfaces/mock_src.imockstore#set"},"set"))),Object(n.b)("h2",{id:"properties-1"},"Properties"),Object(n.b)("h3",{id:"schema"},"schema"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"schema"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLSchema")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L69"},"packages/mock/src/types.ts:69")),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"get"},"get"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","KeyT, ReturnKeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/mock#getargs"},Object(n.b)("em",{parentName:"a"},"GetArgs")),"<","KeyT\\",">","): ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Get a field value from the store for the given type, key and field\nname \u2014 and optionally field arguments. If the field name is not given,\na reference to the type will be returned."),Object(n.b)("p",null,"If the the value for this field is not set, a value will be\ngenerated according to field return type and mock functions."),Object(n.b)("p",null,"If the field's output type is a ",Object(n.b)("inlineCode",{parentName:"p"},"ObjectType")," (or list of ",Object(n.b)("inlineCode",{parentName:"p"},"ObjectType"),"),\nit will return a ",Object(n.b)("inlineCode",{parentName:"p"},"Ref")," (or array of ",Object(n.b)("inlineCode",{parentName:"p"},"Ref"),"), ie a reference to an entity\nin the store."),Object(n.b)("p",null,"Example:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts"},"store.get('Query', 'ROOT', 'viewer');\n&gt; { $ref: { key: 'abc-737dh-djdjd', typeName: 'User' } }\nstore.get('User', 'abc-737dh-djdjd', 'name')\n&gt; \"Hello World\"\n")),Object(n.b)("h4",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ReturnKeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#getargs"},Object(n.b)("em",{parentName:"a"},"GetArgs")),"<","KeyT\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L90"},"packages/mock/src/types.ts:90")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","KeyT, ReturnKeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"typeName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"key"),": KeyT, ",Object(n.b)("inlineCode",{parentName:"p"},"fieldNameOrFieldNames"),": ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string"),"[], ",Object(n.b)("inlineCode",{parentName:"p"},"fieldArgs?"),": ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," { ","[argName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }): ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Shorthand for ",Object(n.b)("inlineCode",{parentName:"p"},"get({typeName, key, fieldName, fieldArgs})"),"."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ReturnKeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"typeName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",{parentName:"tr",align:"left"},"KeyT")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldNameOrFieldNames")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string"),"[]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldArgs?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," { ","[argName: string]",": ",Object(n.b)("em",{parentName:"td"},"any"),";  }")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L96"},"packages/mock/src/types.ts:96")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"typeName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"keyOrDefaultValue?"),": KeyT ","|"," { ","[fieldName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }, ",Object(n.b)("inlineCode",{parentName:"p"},"defaultValue?"),": { ","[fieldName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }): ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Get a reference to the type."),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"typeName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"keyOrDefaultValue?")),Object(n.b)("td",{parentName:"tr",align:"left"},"KeyT ","|"," { ","[fieldName: string]",": ",Object(n.b)("em",{parentName:"td"},"any"),";  }")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"defaultValue?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"object"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L105"},"packages/mock/src/types.ts:105")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","KeyT, ReturnKeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"ref"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"fieldNameOrFieldNames"),": ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string"),"[], ",Object(n.b)("inlineCode",{parentName:"p"},"fieldArgs?"),": ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," { ","[argName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }): ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Shorthand for ",Object(n.b)("inlineCode",{parentName:"p"},"get({typeName: ref.$ref.typeName, key: ref.$ref.key, fieldName, fieldArgs})")),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ReturnKeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ref")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldNameOrFieldNames")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string"),"[]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldArgs?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")," ","|"," { ","[argName: string]",": ",Object(n.b)("em",{parentName:"td"},"any"),";  }")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"unknown")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L117"},"packages/mock/src/types.ts:117")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"reset"},"reset"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"reset"),"(): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Resets the mock store"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L182"},"packages/mock/src/types.ts:182")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"set"},"set"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/mock#setargs"},Object(n.b)("em",{parentName:"a"},"SetArgs")),"<","KeyT\\",">","): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Set a field value in the store for the given type, key and field\nname \u2014 and optionally field arguments."),Object(n.b)("p",null,"If the the field return type is an ",Object(n.b)("inlineCode",{parentName:"p"},"ObjectType")," or a list of\n",Object(n.b)("inlineCode",{parentName:"p"},"ObjectType"),", you can set references to other entity as value:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts"},"// set the viewer name\nstore.set('User', 1, 'name', 'Alexandre);\nstore.set('Query', 'ROOT', 'viewer', store.get('User', 1));\n\n// set the friends of viewer\nstore.set('User', 2, 'name', 'Emily');\nstore.set('User', 3, 'name', 'Caroline');\nstore.set('User', 1, 'friends', [store.get('User', 2), store.get('User', 3)]);\n")),Object(n.b)("p",null,"But it also supports nested set:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-ts"},"store.set('Query', 'ROOT', 'viewer', {\n name: 'Alexandre',\n friends: [\n   { name: 'Emily' }\n   { name: 'Caroline }\n ]\n});\n")),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#setargs"},Object(n.b)("em",{parentName:"a"},"SetArgs")),"<","KeyT\\",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L153"},"packages/mock/src/types.ts:153")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"typeName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"key"),": KeyT, ",Object(n.b)("inlineCode",{parentName:"p"},"fieldName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"value?"),": ",Object(n.b)("em",{parentName:"p"},"unknown"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Shorthand for ",Object(n.b)("inlineCode",{parentName:"p"},"set({typeName, key, fieldName, value})"),"."),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-5"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"typeName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",{parentName:"tr",align:"left"},"KeyT")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"value?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"unknown"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L158"},"packages/mock/src/types.ts:158")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"typeName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"key"),": KeyT, ",Object(n.b)("inlineCode",{parentName:"p"},"values"),": { ","[fieldName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Set the given field values to the type with key."),Object(n.b)("h4",{id:"type-parameters-6"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"typeName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",{parentName:"tr",align:"left"},"KeyT")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"values")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"object"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L163"},"packages/mock/src/types.ts:163")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"ref"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"fieldName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"value?"),": ",Object(n.b)("em",{parentName:"p"},"unknown"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Shorthand for ",Object(n.b)("inlineCode",{parentName:"p"},"set({ref.$ref.typeName, ref.$ref.key, fieldName, value})"),"."),Object(n.b)("h4",{id:"type-parameters-7"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-7"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ref")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"fieldName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"value?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"unknown"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L172"},"packages/mock/src/types.ts:172")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"<","KeyT\\",">","(",Object(n.b)("inlineCode",{parentName:"p"},"ref"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"values"),": { ","[fieldName: string]",": ",Object(n.b)("em",{parentName:"p"},"any"),";  }): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Set the given field values to the type with ref."),Object(n.b)("h4",{id:"type-parameters-8"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"KeyT")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#keytypeconstraints"},Object(n.b)("em",{parentName:"a"},"KeyTypeConstraints"))),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("h4",{id:"parameters-8"},"Parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"ref")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/mock#ref"},Object(n.b)("em",{parentName:"a"},"Ref")),"<","KeyT\\",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"values")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"object"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/mock/src/types.ts#L177"},"packages/mock/src/types.ts:177")))}i.isMDXComponent=!0},303:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),O=i(a),o=b,j=O["".concat(p,".").concat(o)]||O[o]||d[o]||n;return a?r.a.createElement(j,c(c({ref:t},l),{},{components:a})):r.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,p=new Array(n);p[0]=o;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:b,p[1]=c;for(var l=2;l<n;l++)p[l]=a[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);
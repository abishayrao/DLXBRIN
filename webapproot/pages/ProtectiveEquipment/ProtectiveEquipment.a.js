dojo.declare("ProtectiveEquipment", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

ProtectiveEquipment.widgets = {
stepcategfabrLiveVariable1: ["wm.LiveVariable", {"refireOnDbChange":true,"type":"com.testdb.data.StEpCategFabr"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"Situation_Active1.groupValue","targetProperty":"filter.stepcfstatus"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"By_Name1.dataValue","targetProperty":"filter.stepcfnome"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"By_Code1.dataValue","targetProperty":"filter.stepcfcod"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpCategFabr","related":["siClientes"],"view":[{"caption":"Stepcfid","sortable":true,"dataIndex":"stepcfid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepcfcod","sortable":true,"dataIndex":"stepcfcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepcfnome","sortable":true,"dataIndex":"stepcfnome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepcfstatus","sortable":true,"dataIndex":"stepcfstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepcfinivig","sortable":true,"dataIndex":"stepcfinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepcffimvig","sortable":true,"dataIndex":"stepcffimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliid","sortable":true,"dataIndex":"siClientes.sicliid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Siclipfpj","sortable":true,"dataIndex":"siClientes.siclipfpj","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Siclicod","sortable":true,"dataIndex":"siClientes.siclicod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Siclinomegr","sortable":true,"dataIndex":"siClientes.siclinomegr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Siclinomepq","sortable":true,"dataIndex":"siClientes.siclinomepq","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Siclistatus","sortable":true,"dataIndex":"siClientes.siclistatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliinivig","sortable":true,"dataIndex":"siClientes.sicliinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Siclifimvig","sortable":true,"dataIndex":"siClientes.siclifimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Sicliindicacao","sortable":true,"dataIndex":"siClientes.sicliindicacao","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Siclilingua","sortable":true,"dataIndex":"siClientes.siclilingua","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
}],
stepfabricantesLiveVariable1: ["wm.LiveVariable", {"refireOnDbChange":true,"type":"com.testdb.data.StEpFabricantes"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"By_Name.dataValue","targetProperty":"filter.stepfanome"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"Situation_Active.groupValue","targetProperty":"filter.stepfastatus"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"By_Code.dataValue","targetProperty":"filter.stepfaid"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"By_CNPJ.dataValue","targetProperty":"filter.stepfadoc"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpFabricantes","related":["stEpCategFabr","siClientes"],"view":[{"caption":"Stepfaid","sortable":true,"dataIndex":"stepfaid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepfadoc","sortable":true,"dataIndex":"stepfadoc","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepfanome","sortable":true,"dataIndex":"stepfanome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepfaobs","sortable":true,"dataIndex":"stepfaobs","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepfastatus","sortable":true,"dataIndex":"stepfastatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepfainivig","sortable":true,"dataIndex":"stepfainivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfafimvig","sortable":true,"dataIndex":"stepfafimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Stepcfid","sortable":true,"dataIndex":"stEpCategFabr.stepcfid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepcfcod","sortable":true,"dataIndex":"stEpCategFabr.stepcfcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepcfnome","sortable":true,"dataIndex":"stEpCategFabr.stepcfnome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepcfstatus","sortable":true,"dataIndex":"stEpCategFabr.stepcfstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepcfinivig","sortable":true,"dataIndex":"stEpCategFabr.stepcfinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepcffimvig","sortable":true,"dataIndex":"stEpCategFabr.stepcffimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliid","sortable":true,"dataIndex":"siClientes.sicliid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Siclipfpj","sortable":true,"dataIndex":"siClientes.siclipfpj","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Siclicod","sortable":true,"dataIndex":"siClientes.siclicod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Siclinomegr","sortable":true,"dataIndex":"siClientes.siclinomegr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Siclinomepq","sortable":true,"dataIndex":"siClientes.siclinomepq","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Siclistatus","sortable":true,"dataIndex":"siClientes.siclistatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Sicliinivig","sortable":true,"dataIndex":"siClientes.sicliinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Siclifimvig","sortable":true,"dataIndex":"siClientes.siclifimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Sicliindicacao","sortable":true,"dataIndex":"siClientes.sicliindicacao","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Siclilingua","sortable":true,"dataIndex":"siClientes.siclilingua","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
}],
stepfabriccontatosLiveVariable1: ["wm.LiveVariable", {"type":"com.testdb.data.StEpFabricContatos"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpFabricContatos","related":["stEpFabricantes"],"view":[{"caption":"Stfaconid","sortable":true,"dataIndex":"stfaconid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stfaconnome","sortable":true,"dataIndex":"stfaconnome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stfaconcargo","sortable":true,"dataIndex":"stfaconcargo","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stfacondtnasc","sortable":true,"dataIndex":"stfacondtnasc","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stfaconteladdd","sortable":true,"dataIndex":"stfaconteladdd","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stfacontelano","sortable":true,"dataIndex":"stfacontelano","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stfaconemail","sortable":true,"dataIndex":"stfaconemail","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Stfacontelbddd","sortable":true,"dataIndex":"stfacontelbddd","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Stfacontelbno","sortable":true,"dataIndex":"stfacontelbno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Stepfaid","sortable":true,"dataIndex":"stEpFabricantes.stepfaid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepfadoc","sortable":true,"dataIndex":"stEpFabricantes.stepfadoc","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepfanome","sortable":true,"dataIndex":"stEpFabricantes.stepfanome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepfaobs","sortable":true,"dataIndex":"stEpFabricantes.stepfaobs","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepfastatus","sortable":true,"dataIndex":"stEpFabricantes.stepfastatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepfainivig","sortable":true,"dataIndex":"stEpFabricantes.stepfainivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfafimvig","sortable":true,"dataIndex":"stEpFabricantes.stepfafimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
stepfabricendLiveVariable1: ["wm.LiveVariable", {"type":"com.testdb.data.StEpFabricEnd"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpFabricEnd","related":["geTbTiposEndereco","stEpFabricantes"],"view":[{"caption":"Stfaendid","sortable":true,"dataIndex":"stfaendid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stfaendlogra","sortable":true,"dataIndex":"stfaendlogra","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stfaendno","sortable":true,"dataIndex":"stfaendno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stfaendcompl","sortable":true,"dataIndex":"stfaendcompl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stfaendbairro","sortable":true,"dataIndex":"stfaendbairro","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stfaendmunic","sortable":true,"dataIndex":"stfaendmunic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stfaendcep","sortable":true,"dataIndex":"stfaendcep","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Getipoendid","sortable":true,"dataIndex":"geTbTiposEndereco.getipoendid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Getipoendcod","sortable":true,"dataIndex":"geTbTiposEndereco.getipoendcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Getipoenddescr","sortable":true,"dataIndex":"geTbTiposEndereco.getipoenddescr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Getipoendstatus","sortable":true,"dataIndex":"geTbTiposEndereco.getipoendstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Getipoendinivig","sortable":true,"dataIndex":"geTbTiposEndereco.getipoendinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Getipoendfimvig","sortable":true,"dataIndex":"geTbTiposEndereco.getipoendfimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfaid","sortable":true,"dataIndex":"stEpFabricantes.stepfaid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepfadoc","sortable":true,"dataIndex":"stEpFabricantes.stepfadoc","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepfanome","sortable":true,"dataIndex":"stEpFabricantes.stepfanome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepfaobs","sortable":true,"dataIndex":"stEpFabricantes.stepfaobs","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepfastatus","sortable":true,"dataIndex":"stEpFabricantes.stepfastatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepfainivig","sortable":true,"dataIndex":"stEpFabricantes.stepfainivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfafimvig","sortable":true,"dataIndex":"stEpFabricantes.stepfafimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
stepfabrictelLiveVariable1: ["wm.LiveVariable", {"type":"com.testdb.data.StEpFabricTel"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpFabricTel","related":["geTbTiposTelefone","stEpFabricantes"],"view":[{"caption":"Stfatelid","sortable":true,"dataIndex":"stfatelid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stfatelddd","sortable":true,"dataIndex":"stfatelddd","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stfatelno","sortable":true,"dataIndex":"stfatelno","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stfatelramal","sortable":true,"dataIndex":"stfatelramal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Getipotelid","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Getipotelcod","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Getipoteldescr","sortable":true,"dataIndex":"geTbTiposTelefone.getipoteldescr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Getipotelstatus","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Getipotelinivig","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Getipotelfimvig","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelfimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfaid","sortable":true,"dataIndex":"stEpFabricantes.stepfaid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepfadoc","sortable":true,"dataIndex":"stEpFabricantes.stepfadoc","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepfanome","sortable":true,"dataIndex":"stEpFabricantes.stepfanome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepfaobs","sortable":true,"dataIndex":"stEpFabricantes.stepfaobs","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepfastatus","sortable":true,"dataIndex":"stEpFabricantes.stepfastatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepfainivig","sortable":true,"dataIndex":"stEpFabricantes.stepfainivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfafimvig","sortable":true,"dataIndex":"stEpFabricantes.stepfafimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
stepfabricwebLiveVariable1: ["wm.LiveVariable", {"type":"com.testdb.data.StEpFabricWeb"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.testdb.data.StEpFabricWeb","related":["geTbTiposTelefone","stEpFabricantes"],"view":[{"caption":"Stfawebid","sortable":true,"dataIndex":"stfawebid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stfawebtxt","sortable":true,"dataIndex":"stfawebtxt","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Getipotelid","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Getipotelcod","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelcod","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Getipoteldescr","sortable":true,"dataIndex":"geTbTiposTelefone.getipoteldescr","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Getipotelstatus","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelstatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Getipotelinivig","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelinivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Getipotelfimvig","sortable":true,"dataIndex":"geTbTiposTelefone.getipotelfimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfaid","sortable":true,"dataIndex":"stEpFabricantes.stepfaid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Stepfadoc","sortable":true,"dataIndex":"stEpFabricantes.stepfadoc","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Stepfanome","sortable":true,"dataIndex":"stEpFabricantes.stepfanome","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Stepfaobs","sortable":true,"dataIndex":"stEpFabricantes.stepfaobs","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Stepfastatus","sortable":true,"dataIndex":"stEpFabricantes.stepfastatus","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Stepfainivig","sortable":true,"dataIndex":"stEpFabricantes.stepfainivig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Stepfafimvig","sortable":true,"dataIndex":"stEpFabricantes.stepfafimvig","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
JOB_Safety1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"JobSafety1\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"bottom"}, {}, {
panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"10%","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"50%"}, {}, {
picture1: ["wm.Picture", {"height":"65px","source":"resources/images/logos/dlx_logo_1.png","width":"135px"}, {}],
label3: ["wm.Label", {"align":"center","caption":"Protective Equipment","height":"35px","padding":"4","width":"222px"}, {}]
}],
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"50%"}, {}, {
logoutButton1: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.navigationCall1"}]
}]
}],
panel1: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
ProtectiveEquipmentMenu: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"Basic Tables","separator":undefined,"defaultLabel":"Basic Tables","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"Category Manufacturers","separator":undefined,"defaultLabel":"Category Manufacturers","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Category_Manufacturers","children":[]},{"label":"Equipment Manufacturers","separator":undefined,"defaultLabel":"Equipment Manufacturers","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"Equipment_Manufacturers","children":[]}]},{"label":"Collective Protective Equipment","separator":undefined,"defaultLabel":"Collective Protective Equipment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"Personal Protective Equipment","separator":undefined,"defaultLabel":"Personal Protective Equipment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"Back","separator":undefined,"defaultLabel":"Back","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"JOB_Safety1","children":[]}],"height":"100%","localizationStructure":{},"transparent":false,"vertical":true,"width":"15%"}, {}],
layers1: ["wm.Layers", {"width":"85%"}, {}, {
Default_Layer: ["wm.Layer", {"borderColor":"","caption":"Default_Layer","horizontalAlign":"center","themeStyleType":"","verticalAlign":"middle"}, {}, {
label1: ["wm.Label", {"align":"center","autoSizeWidth":true,"caption":"Please select an option from the menu to proceed ...","padding":"4","width":"360px"}, {}]
}],
Category_Manufacturers: ["wm.Layer", {"borderColor":"","caption":"Category_Manufacturers","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
panel6: ["wm.Panel", {"height":"50%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
testDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepcategfabrGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Categories of Manufaturers"}, {}, {
stepcategfabrDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"stepcfid","title":"Stepcfid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepcfcod","title":"Code","width":"60px","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepcfstatus","title":"Status","width":"130px","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepcfnome","title":"Name","width":"81px","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepcfinivig","title":"Valid From","width":"111px","align":"center","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepcffimvig","title":"Valid till","width":"114px","align":"center","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"siClientes.sicliid","title":"Sicliid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclipfpj","title":"Siclipfpj","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclicod","title":"Siclicod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomegr","title":"Siclinomegr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomepq","title":"Siclinomepq","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclistatus","title":"Siclistatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.sicliinivig","title":"Sicliinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.siclifimvig","title":"Siclifimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliindicacao","title":"Sicliindicacao","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclilingua","title":"Siclilingua","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Code: \" + ${stepcfcod} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${stepcfstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${stepcfnome} + \"</div>\"\n+ \"<div class='MobileRow'>Valid From: \" + wm.List.prototype.dateFormatter({}, null,null,null,${stepcfinivig}) + \"</div>\"\n+ \"<div class='MobileRow'>Valid till: \" + wm.List.prototype.dateFormatter({}, null,null,null,${stepcffimvig}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpCategFabr","height":"100%","localizationStructure":{},"margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepcategfabrLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
FilterAndLocation1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
spacer6: ["wm.Spacer", {"height":"5%","width":"100%"}, {}],
Situation_Panel1: ["wm.Panel", {"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
SituationLabel1: ["wm.Label", {"caption":"Situation   ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Situation_Active1: ["wm.RadioButton", {"caption":"Active","captionPosition":"right","checkedValue":"A","displayValue":"","groupValue":"A","height":"100%","radioGroup":"situation","startChecked":true,"width":"86px"}, {"onchange":"serviceVariable1","onchange1":"Situation_Active1Change1"}],
spacer4: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Situation_InActive1: ["wm.RadioButton", {"caption":"Inactive","captionPosition":"right","checkedValue":"N","dataType":undefined,"displayValue":false,"groupValue":"A","height":"100%","radioGroup":"situation","width":"94px"}, {"onchange":"serviceVariable2"}]
}]
}],
FilterOrLocationPanel1: ["wm.Panel", {"disabled":true,"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
FilterLocationLabel1: ["wm.Label", {"caption":"Filter/Location  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Filter1: ["wm.RadioButton", {"caption":"Filter","captionPosition":"right","displayValue":"","height":"100%","radioGroup":"filterOrlocation","width":"86px"}, {}],
spacer7: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Location1: ["wm.RadioButton", {"caption":"Location","captionPosition":"right","dataType":undefined,"displayValue":false,"height":"100%","radioGroup":"filterOrlocation","width":"94px"}, {}]
}]
}],
FilterTypePanel1: ["wm.Panel", {"height":"40%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
FilterTypeLabel1: ["wm.Label", {"caption":"Filter Type  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel12: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_Code1: ["wm.Number", {"caption":"By Code","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Name1: ["wm.Text", {"caption":"By Name","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}],
spacer8: ["wm.Spacer", {"height":"10px","width":"100px"}, {}],
panel15: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_CNPJ1: ["wm.Number", {"caption":"By CNPJ","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Date1: ["wm.Date", {"caption":"By Date","captionSize":"80px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}]
}],
ButtonPanel1: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
ResetButton1: ["wm.Button", {"caption":"Reset","desktopHeight":"35px","height":"35px","margin":"4","mobileHeight":"35%","width":"30%"}, {"onclick":"ResetButton1Click"}]
}]
}]
}],
panel16: ["wm.Panel", {"height":"50%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
stepcategfabrDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"242px","title":"Details"}, {}, {
stepcategfabrLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"212px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepcategfabrLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepcategfabrDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stepcfidEditor1: ["wm.Number", {"caption":"ID","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"stepcfid","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepcfcodEditor1: ["wm.Text", {"caption":"Code","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepcfcod","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepcfnomeEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepcfnome","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepcfstatusEditor1: ["wm.Text", {"caption":"Status","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepcfstatus","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepcfinivigEditor1: ["wm.DateTime", {"caption":"Valid From","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"stepcfinivig","height":"26px","readonly":true,"width":"90%"}, {}],
stepcffimvigEditor1: ["wm.DateTime", {"caption":"Valid Till","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"stepcffimvig","height":"26px","readonly":true,"width":"90%"}, {}],
siClientesLookup1: ["wm.Lookup", {"caption":"Customer","captionSize":"140px","dataType":"com.testdb.data.SiClientes","dataValue":undefined,"displayField":"siclinomepq","formField":"siClientes","readonly":true,"required":true,"width":"90%"}, {}],
stepcategfabrLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepcategfabrLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepcategfabrLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepcategfabrLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepcategfabrLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepcategfabrLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepcategfabrLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepcategfabrLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepcategfabrLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepcategfabrLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
Equipment_Manufacturers: ["wm.Layer", {"borderColor":"","caption":"Equipment_Manufacturers","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"50%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
testDBLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepfabricantesGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Manufacturers"}, {}, {
stepfabricantesDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"stepfaid","title":"Stepfaid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfadoc","title":"Document","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfanome","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfaobs","title":"Observation","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfastatus","title":"Status","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfainivig","title":"Valid From","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stepfafimvig","title":"Valid Till","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcfid","title":"Stepcfid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcfcod","title":"Stepcfcod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcfnome","title":"Stepcfnome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcfstatus","title":"Stepcfstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcfinivig","title":"Stepcfinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpCategFabr.stepcffimvig","title":"Stepcffimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliid","title":"Sicliid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclipfpj","title":"Siclipfpj","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclicod","title":"Siclicod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomegr","title":"Siclinomegr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclinomepq","title":"Siclinomepq","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclistatus","title":"Siclistatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.sicliinivig","title":"Sicliinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.siclifimvig","title":"Siclifimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"siClientes.sicliindicacao","title":"Sicliindicacao","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"siClientes.siclilingua","title":"Siclilingua","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Document: \" + ${stepfadoc} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${stepfanome} + \"</div>\"\n+ \"<div class='MobileRow'>Observation: \" + ${stepfaobs} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${stepfastatus} + \"</div>\"\n+ \"<div class='MobileRow'>Valid From: \" + wm.List.prototype.dateFormatter({}, null,null,null,${stepfainivig}) + \"</div>\"\n+ \"<div class='MobileRow'>Valid Till: \" + wm.List.prototype.dateFormatter({}, null,null,null,${stepfafimvig}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpFabricantes","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepfabricantesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
FilterAndLocation: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
spacer5: ["wm.Spacer", {"height":"5%","width":"100%"}, {}],
Situation_Panel: ["wm.Panel", {"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
SituationLabel: ["wm.Label", {"caption":"Situation   ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Situation_Active: ["wm.RadioButton", {"caption":"Active","captionPosition":"right","checkedValue":"A","displayValue":"A","groupValue":"A","height":"100%","radioGroup":"situation","startChecked":true,"width":"86px"}, {"onchange":"serviceVariable1","onchange1":"Situation_ActiveChange1"}],
spacer1: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Situation_InActive: ["wm.RadioButton", {"caption":"Inactive","captionPosition":"right","checkedValue":"N","dataType":undefined,"displayValue":false,"groupValue":"A","height":"100%","radioGroup":"situation","width":"94px"}, {"onchange":"serviceVariable2"}]
}]
}],
FilterOrLocationPanel: ["wm.Panel", {"disabled":true,"height":"20%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
FilterLocationLabel: ["wm.Label", {"caption":"Filter/Location  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
Filter: ["wm.RadioButton", {"caption":"Filter","captionPosition":"right","displayValue":"","height":"100%","radioGroup":"filterOrlocation","width":"86px"}, {}],
spacer2: ["wm.Spacer", {"height":"100%","width":"20%"}, {}],
Location: ["wm.RadioButton", {"caption":"Location","captionPosition":"right","dataType":undefined,"displayValue":false,"height":"100%","radioGroup":"filterOrlocation","width":"94px"}, {}]
}]
}],
FilterTypePanel: ["wm.Panel", {"height":"40%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
FilterTypeLabel: ["wm.Label", {"caption":"Filter Type  ","height":"25%","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
panel5: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_Code: ["wm.Number", {"caption":"By Code","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Name: ["wm.Text", {"caption":"By Name","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}],
spacer3: ["wm.Spacer", {"height":"10px","width":"100px"}, {}],
panel13: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
By_CNPJ: ["wm.Number", {"caption":"By CNPJ","captionSize":"80Happy Birthday :)px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}],
By_Date: ["wm.Date", {"caption":"By Date","captionSize":"80px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"30%"}, {}]
}]
}],
ButtonPanel: ["wm.Panel", {"height":"25%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
ResetButton: ["wm.Button", {"caption":"Reset","desktopHeight":"35px","height":"35px","margin":"4","mobileHeight":"35%","width":"30%"}, {"onclick":"ResetButtonClick"}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
Basic_Data: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Basic Data","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
stepfabricantesDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"266px","title":"Basic Data"}, {}, {
stepfabricantesLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"236px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepfabricantesLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricantesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stepfadocEditor1: ["wm.Text", {"caption":"Document","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepfadoc","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepfanomeEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepfanome","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepfaobsEditor1: ["wm.Text", {"caption":"Observation","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepfaobs","height":"26px","readonly":true,"width":"90%"}, {}],
stepfastatusEditor1: ["wm.Text", {"caption":"Status","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stepfastatus","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stepfainivigEditor1: ["wm.DateTime", {"caption":"Valid From","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"stepfainivig","height":"26px","readonly":true,"width":"90%"}, {}],
stepfafimvigEditor1: ["wm.DateTime", {"caption":"Valid Till","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"stepfafimvig","height":"26px","readonly":true,"width":"90%"}, {}],
stEpCategFabrLookup1: ["wm.Lookup", {"caption":"StEpCategFabr","captionSize":"140px","dataType":"com.testdb.data.StEpCategFabr","dataValue":undefined,"displayField":"stepcfstatus","formField":"stEpCategFabr","readonly":true,"required":true,"width":"90%"}, {}],
siClientesLookup2: ["wm.Lookup", {"caption":"Customer","captionSize":"140px","dataType":"com.testdb.data.SiClientes","dataValue":undefined,"displayField":"siclinomepq","formField":"siClientes","readonly":true,"required":true,"width":"90%"}, {}],
stepfabricantesLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepfabricantesLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton2: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepfabricantesLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricantesLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton2: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepfabricantesLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton2: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepfabricantesLiveForm1EditPanel.beginDataInsert"}],
updateButton2: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepfabricantesLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricantesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton2: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepfabricantesLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricantesLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
Contacts: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Contacts","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
testDBLivePanel2: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepfabriccontatosGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Contacts"}, {}, {
stepfabriccontatosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"stfaconid","title":"Stfaconid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stfaconnome","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaconcargo","title":"Occupation","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfacondtnasc","title":"Date of Birth","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaconteladdd","title":"Phone 1 DDD Code","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfacontelano","title":"Phone 1 Number","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaconemail","title":"E-mail","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfacontelbddd","title":"Phone 2 DDD Code","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfacontelbno","title":"Phone 2 Number","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaid","title":"Stepfaid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfadoc","title":"Stepfadoc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfanome","title":"Stepfanome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaobs","title":"Stepfaobs","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfastatus","title":"Stepfastatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfainivig","title":"Stepfainivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfafimvig","title":"Stepfafimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${stfaconnome} + \"</div>\"\n+ \"<div class='MobileRow'>Occupation: \" + ${stfaconcargo} + \"</div>\"\n+ \"<div class='MobileRow'>Date of Birth: \" + wm.List.prototype.dateFormatter({}, null,null,null,${stfacondtnasc}) + \"</div>\"\n+ \"<div class='MobileRow'>Phone 1 DDD Code: \" + ${stfaconteladdd} + \"</div>\"\n+ \"<div class='MobileRow'>Phone 1 Number: \" + ${stfacontelano} + \"</div>\"\n+ \"<div class='MobileRow'>E-mail: \" + ${stfaconemail} + \"</div>\"\n+ \"<div class='MobileRow'>Phone 2 DDD Code: \" + ${stfacontelbddd} + \"</div>\"\n+ \"<div class='MobileRow'>Phone 2 Number: \" + ${stfacontelbno} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpFabricContatos","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepfabriccontatosLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
stepfabriccontatosDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"294px","title":"Details"}, {}, {
stepfabriccontatosLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"264px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepfabriccontatosLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabriccontatosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stfaconnomeEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaconnome","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stfaconcargoEditor1: ["wm.Text", {"caption":"Occupation","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaconcargo","height":"26px","readonly":true,"width":"90%"}, {}],
stfacondtnascEditor1: ["wm.DateTime", {"caption":"Date of Birth","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"stfacondtnasc","height":"26px","readonly":true,"width":"90%"}, {}],
stfaconteladddEditor1: ["wm.Text", {"caption":"Phone 1 DDD Code","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaconteladdd","height":"26px","readonly":true,"width":"90%"}, {}],
stfacontelanoEditor1: ["wm.Text", {"caption":"Phone 1 Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfacontelano","height":"26px","readonly":true,"width":"90%"}, {}],
stfaconemailEditor1: ["wm.Text", {"caption":"E-mail","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaconemail","height":"26px","readonly":true,"width":"90%"}, {}],
stfacontelbdddEditor1: ["wm.Text", {"caption":"Phone 2 DDD Code","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfacontelbddd","height":"26px","readonly":true,"width":"90%"}, {}],
stfacontelbnoEditor1: ["wm.Text", {"caption":"Phone 2 Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfacontelbno","height":"26px","readonly":true,"width":"90%"}, {}],
stEpFabricantesLookup1: ["wm.Lookup", {"caption":"StEpFabricantes","captionSize":"140px","dataType":"com.testdb.data.StEpFabricantes","dataValue":undefined,"displayField":"stepfastatus","formField":"stEpFabricantes","readonly":true,"required":true,"width":"90%"}, {}],
stepfabriccontatosLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepfabriccontatosLiveForm1","operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton3: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepfabriccontatosLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabriccontatosLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton3: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepfabriccontatosLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton3: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepfabriccontatosLiveForm1EditPanel.beginDataInsert"}],
updateButton3: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepfabriccontatosLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabriccontatosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton3: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepfabriccontatosLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabriccontatosLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
Addreses: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Addreses","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
testDBLivePanel3: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepfabricendGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Addreses"}, {}, {
stepfabricendDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"stfaendid","title":"Stfaendid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stfaendlogra","title":"Address","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaendno","title":"Number","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaendcompl","title":"Complement","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaendbairro","title":"Location","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaendmunic","title":"City","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfaendcep","title":"ZIP Code","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoendid","title":"Getipoendid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoendcod","title":"Getipoendcod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoenddescr","title":"Getipoenddescr","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoendstatus","title":"Getipoendstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoendinivig","title":"Getipoendinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"geTbTiposEndereco.getipoendfimvig","title":"Getipoendfimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaid","title":"Stepfaid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfadoc","title":"Stepfadoc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfanome","title":"Stepfanome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaobs","title":"Stepfaobs","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfastatus","title":"Stepfastatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfainivig","title":"Stepfainivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfafimvig","title":"Stepfafimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Address: \" + ${stfaendlogra} + \"</div>\"\n+ \"<div class='MobileRow'>Number: \" + ${stfaendno} + \"</div>\"\n+ \"<div class='MobileRow'>Complement: \" + ${stfaendcompl} + \"</div>\"\n+ \"<div class='MobileRow'>Location: \" + ${stfaendbairro} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${stfaendmunic} + \"</div>\"\n+ \"<div class='MobileRow'>ZIP Code: \" + ${stfaendcep} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpFabricEnd","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepfabricendLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
stepfabricendDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"218px","title":"Details"}, {}, {
stepfabricendLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"188px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepfabricendLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricendDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stfaendlograEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendlogra","height":"26px","readonly":true,"width":"90%"}, {}],
stfaendnoEditor1: ["wm.Text", {"caption":"Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendno","height":"26px","readonly":true,"width":"90%"}, {}],
stfaendcomplEditor1: ["wm.Text", {"caption":"Complement","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendcompl","height":"26px","readonly":true,"width":"90%"}, {}],
stfaendbairroEditor1: ["wm.Text", {"caption":"Location","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendbairro","height":"26px","readonly":true,"width":"90%"}, {}],
stfaendmunicEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendmunic","height":"26px","readonly":true,"width":"90%"}, {}],
stfaendcepEditor1: ["wm.Text", {"caption":"ZIP Code","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfaendcep","height":"26px","readonly":true,"width":"90%"}, {}],
stepfabricendLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepfabricendLiveForm1","operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton4: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepfabricendLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricendLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton4: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepfabricendLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton4: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepfabricendLiveForm1EditPanel.beginDataInsert"}],
updateButton4: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepfabricendLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricendLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton4: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepfabricendLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricendLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
Telephones: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Telephones","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
testDBLivePanel4: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepfabrictelGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Telephones"}, {}, {
stepfabrictelDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"stfatelid","title":"Stfatelid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"stfatelddd","title":"DDD Code","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfatelno","title":"Number","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfatelramal","title":"Phone Extension","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelid","title":"Getipotelid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelcod","title":"Getipotelcod","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipoteldescr","title":"Getipoteldescr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelstatus","title":"Getipotelstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelinivig","title":"Getipotelinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelfimvig","title":"Getipotelfimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaid","title":"Stepfaid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfadoc","title":"Stepfadoc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfanome","title":"Stepfanome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaobs","title":"Stepfaobs","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfastatus","title":"Stepfastatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfainivig","title":"Stepfainivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfafimvig","title":"Stepfafimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>DDD Code: \" + ${stfatelddd} + \"</div>\"\n+ \"<div class='MobileRow'>Number: \" + ${stfatelno} + \"</div>\"\n+ \"<div class='MobileRow'>Phone Extension: \" + ${stfatelramal} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpFabricTel","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepfabrictelLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
stepfabrictelDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"188px","title":"Details"}, {}, {
stepfabrictelLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"158px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepfabrictelLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabrictelDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stfateldddEditor1: ["wm.Text", {"caption":"DDD Code","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfatelddd","height":"26px","readonly":true,"width":"90%"}, {}],
stfatelnoEditor1: ["wm.Text", {"caption":"Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfatelno","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stfatelramalEditor1: ["wm.Text", {"caption":"Extension","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfatelramal","height":"26px","readonly":true,"width":"90%"}, {}],
geTbTiposTelefoneLookup1: ["wm.Lookup", {"caption":"GeTbTiposTelefone","captionSize":"140px","dataType":"com.testdb.data.GeTbTiposTelefone","dataValue":undefined,"displayField":"getipoteldescr","formField":"geTbTiposTelefone","readonly":true,"required":true,"width":"90%"}, {}],
stEpFabricantesLookup2: ["wm.Lookup", {"caption":"StEpFabricantes","captionSize":"140px","dataType":"com.testdb.data.StEpFabricantes","dataValue":undefined,"displayField":"stepfastatus","formField":"stEpFabricantes","readonly":true,"required":true,"width":"90%"}, {}],
stepfabrictelLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepfabrictelLiveForm1","operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton5: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepfabrictelLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabrictelLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton5: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepfabrictelLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton5: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepfabrictelLiveForm1EditPanel.beginDataInsert"}],
updateButton5: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepfabrictelLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabrictelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton5: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepfabrictelLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabrictelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
Web: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Web","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
testDBLivePanel5: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
stepfabricwebGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Web"}, {}, {
stepfabricwebDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"stfawebid","title":"Web ID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"stfawebtxt","title":"Text","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelid","title":"Getipotelid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelcod","title":"Getipotelcod","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipoteldescr","title":"Getipoteldescr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelstatus","title":"Getipotelstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelinivig","title":"Getipotelinivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"geTbTiposTelefone.getipotelfimvig","title":"Getipotelfimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaid","title":"Stepfaid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfadoc","title":"Stepfadoc","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfanome","title":"Stepfanome","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfaobs","title":"Stepfaobs","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfastatus","title":"Stepfastatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfainivig","title":"Stepfainivig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"stEpFabricantes.stepfafimvig","title":"Stepfafimvig","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Web ID: \" + ${stfawebid} + \"</div>\"\n+ \"<div class='MobileRow'>Text: \" + ${stfawebtxt} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.testdb.data.StEpFabricWeb","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"stepfabricwebLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
stepfabricwebDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"162px","title":"Details"}, {}, {
stepfabricwebLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"132px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"stepfabricwebLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricwebDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
stfawebidEditor1: ["wm.Number", {"caption":"Stfawebid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"stfawebid","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
stfawebtxtEditor1: ["wm.Text", {"caption":"Stfawebtxt","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"stfawebtxt","height":"26px","readonly":true,"width":"90%"}, {}],
geTbTiposTelefoneLookup2: ["wm.Lookup", {"caption":"GeTbTiposTelefone","captionSize":"140px","dataType":"com.testdb.data.GeTbTiposTelefone","dataValue":undefined,"displayField":"getipoteldescr","formField":"geTbTiposTelefone","readonly":true,"required":true,"width":"90%"}, {}],
stEpFabricantesLookup3: ["wm.Lookup", {"caption":"StEpFabricantes","captionSize":"140px","dataType":"com.testdb.data.StEpFabricantes","dataValue":undefined,"displayField":"stepfastatus","formField":"stEpFabricantes","readonly":true,"required":true,"width":"90%"}, {}],
stepfabricwebLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"stepfabricwebLiveForm1","operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton6: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"stepfabricwebLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricwebLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton6: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"stepfabricwebLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton6: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"stepfabricwebLiveForm1EditPanel.beginDataInsert"}],
updateButton6: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"stepfabricwebLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricwebLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton6: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"stepfabricwebLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"stepfabricwebLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

ProtectiveEquipment.prototype._cssText = '';
ProtectiveEquipment.prototype._htmlText = '';
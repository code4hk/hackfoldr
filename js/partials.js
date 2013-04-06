angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>This is pre-alpha!</h1></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hack.html', [
'<div resize="resize" ng-cloak="ng-cloak" class="hackfolder"><div ng-class="{collapsed: collapsed}" ng-click="collapsed=!collapsed" class="index"><div class="hackid"><i class="icon-home"></i>&nbsp;<a ng-href="http://ethercalc.org/{{hackId}}" target="_blank" ngx-final="ngx-final" class="indexlink expanded-content">{{HackFolder.folderTitle || hackId}} </a><small><a ng-click="reload(hackId)" ngx-noclick="ngx-noclick" class="reload">&#x21BA;</a></small></div><ul ui-sortable="sortableOptions" ng-model="tree"><li ng-repeat="doc in tree" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div class="entry"><span ui-if="doc.type == \'dummy\'"><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-href="/#/{{hackId}}/{{doc.id}}" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span></a><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span><span ui-if="doc.children" ng-class="{collapsed: !doc.expand}" ng-click="doc.expand=!doc.expand" class="collapser">{{ {"true": "&#x25B8;", "false": "&#x25BE;"}[!doc.expand] }}</span></div><ul ui-if="doc.children &amp;&amp; doc.expand" ui-sortable="sortableOptions" ng-model="doc.children"><li ng-repeat="doc in doc.children" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div class="entry"><span ui-if="doc.type == \'dummy\'"><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-href="/#/{{hackId}}/{{doc.id}}" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" title="{{doc.title || doc.id}}"/><span class="expanded-content">{{doc.title || doc.id}}</span></a><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span></div></li></ul></li></ul></div><div ng-style="{height: height-49}" class="pad-container"><article ng-repeat="(key, iframe) in iframes" ng-show="docId == key" class="pad"><span ng-show="hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'" ng-click="activate(iframe.doc.id, true)" class="docmode">edit</span><div ui-if="iframe.doc.iframeunsure" class="noiframe unsure">Open the link in new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span><div ng-click="iframe.doc.iframeunsure = false" class="icon icon-close">&#x274c;</div></div><div ui-if="iframe.doc.noiframe" class="noiframe">This site does not appear to allow iframe.  Open the link in new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span></div><iframe ng-show="!iframe.doc.noiframe" ng-src="{{iframe.src}}" ngx-iframe="iframeCallback(iframe.doc)" class="embed"></iframe></article></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<ul class="nav"><li><a ng-href="/">Home</a></li></ul><ul class="nav pull-right"><li ng-class="{ active: $state.includes(\'about\') }"><a ng-href="#/about">About</a></li></ul>',''].join("\n"));
}]);
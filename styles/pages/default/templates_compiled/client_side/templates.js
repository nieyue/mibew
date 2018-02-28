/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.default_control=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s;return"<strong>"+n.escapeExpression((s=null!=(s=l.title||(null!=a?a.title:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"title",hash:{},data:t}):s))+"</strong>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.message=Handlebars.template({1:function(n,a,l,e,t){var s,i=null!=a?a:n.nullContext||{},r=l.helperMissing,o="function",u=n.escapeExpression;return"<span class='name-"+u((s=null!=(s=l.kindName||(null!=a?a.kindName:a))?s:r,typeof s===o?s.call(i,{name:"kindName",hash:{},data:t}):s))+"'>"+u((s=null!=(s=l.name||(null!=a?a.name:a))?s:r,typeof s===o?s.call(i,{name:"name",hash:{},data:t}):s))+"</span>: "},3:function(n,a,l,e,t){return n.escapeExpression((l.urlReplace||a&&a.urlReplace||l.helperMissing).call(null!=a?a:n.nullContext||{},null!=a?a.message:a,{name:"urlReplace",hash:{},data:t}))},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i,r=null!=a?a:n.nullContext||{},o=l.helperMissing,u=n.escapeExpression;return"<span>"+u((l.formatTime||a&&a.formatTime||o).call(r,null!=a?a.created:a,{name:"formatTime",hash:{},data:t}))+"</span>\n"+(null!=(s=l["if"].call(r,null!=a?a.name:a,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?s:"")+"\n<span class='message-"+u((i=null!=(i=l.kindName||(null!=a?a.kindName:a))?i:o,"function"==typeof i?i.call(r,{name:"kindName",hash:{},data:t}):i))+"'>"+(null!=(s=(l.replace||a&&a.replace||o).call(r,"\\n","<br/>",{name:"replace",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t}))?s:"")+"</span><br/>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/agent"]=Handlebars.template({1:function(n,a,l,e,t){return"away"},3:function(n,a,l,e,t){return"online"},5:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Away",{name:"l10n",hash:{},data:t}))},7:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Up to date",{name:"l10n",hash:{},data:t}))},9:function(n,a,l,e,t){return","},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i,r=null!=a?a:n.nullContext||{};return'<span class="agent-status-'+(null!=(s=l["if"].call(r,null!=a?a.away:a,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t}))?s:"")+' inline-block" title="'+(null!=(s=l["if"].call(r,null!=a?a.away:a,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.program(7,t,0),data:t}))?s:"")+'"></span>'+n.escapeExpression((i=null!=(i=l.name||(null!=a?a.name:a))?i:l.helperMissing,"function"==typeof i?i.call(r,{name:"name",hash:{},data:t}):i))+(null!=(s=l.unless.call(r,null!=a?a.isLast:a,{name:"unless",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t}))?s:"")},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/no_threads"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){return'<td class="no-threads" colspan="8">'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"The list of visitors waiting is empty",{name:"l10n",hash:{},data:t}))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/no_visitors"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){return'<td class="no-visitors" colspan="9">'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"There are no visitors ready to chat on your site at present time",{name:"l10n",hash:{},data:t}))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/queued_thread"]=Handlebars.template({1:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Click to chat with the visitor",{name:"l10n",hash:{},data:t}))},3:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Watch the chat",{name:"l10n",hash:{},data:t}))},5:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"[spam]",{name:"l10n",hash:{},data:t}))+"&nbsp;"},7:function(n,a,l,e,t){var s,i=null!=a?a:n.nullContext||{},r=l.helperMissing,o="function",u=n.escapeExpression;return'<div class="first-message"><a href="javascript:void(0);" title="'+u((s=null!=(s=l.firstMessage||(null!=a?a.firstMessage:a))?s:r,typeof s===o?s.call(i,{name:"firstMessage",hash:{},data:t}):s))+'">'+u((s=null!=(s=l.firstMessagePreview||(null!=a?a.firstMessagePreview:a))?s:r,typeof s===o?s.call(i,{name:"firstMessagePreview",hash:{},data:t}):s))+"</a></div>"},9:function(n,a,l,e,t){return'            <div class="control open-dialog open-control inline-block" title="'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Click to chat with the visitor",{name:"l10n",hash:{},data:t}))+'"></div>\n'},11:function(n,a,l,e,t){return'            <div class="control view-control inline-block" title="'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Watch the chat",{name:"l10n",hash:{},data:t}))+'"></div>\n'},13:function(n,a,l,e,t){return'            <div class="control track-control inline-block" title="'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Tracked visitor's path",{name:"l10n",hash:{},data:t}))+'"></div>\n'},15:function(n,a,l,e,t){return'            <div class="control ban-control inline-block" title="'+n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Ban this visitor",{name:"l10n",hash:{},data:t}))+'"></div>\n'},17:function(n,a,l,e,t){var s;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+n.escapeExpression((s=null!=(s=l.remote||(null!=a?a.remote:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"remote",hash:{},data:t}):s))+"</a>"},19:function(n,a,l,e,t){var s;return n.escapeExpression((s=null!=(s=l.remote||(null!=a?a.remote:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"remote",hash:{},data:t}):s))},21:function(n,a,l,e,t){var s;return'<span class="timesince" data-timestamp="'+n.escapeExpression((s=null!=(s=l.waitingTime||(null!=a?a.waitingTime:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"waitingTime",hash:{},data:t}):s))+'"></span>'},23:function(n,a,l,e,t){return"-"},25:function(n,a,l,e,t){var s;return n.escapeExpression(n.lambda(null!=(s=null!=a?a.ban:a)?s.reason:s,a))},27:function(n,a,l,e,t){var s;return n.escapeExpression((s=null!=(s=l.userAgent||(null!=a?a.userAgent:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"userAgent",hash:{},data:t}):s))},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i,r=null!=a?a:n.nullContext||{},o=l.helperMissing,u="function",c=n.escapeExpression;return'<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="'+(null!=(s=l["if"].call(r,null!=a?a.canOpen:a,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t}))?s:"")+'">'+(null!=(s=l["if"].call(r,null!=a?a.ban:a,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.noop,data:t}))?s:"")+c((i=null!=(i=l.userName||(null!=a?a.userName:a))?i:o,typeof i===u?i.call(r,{name:"userName",hash:{},data:t}):i))+"</a></div>\n    "+(null!=(s=l["if"].call(r,null!=a?a.firstMessage:a,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t}))?s:"")+'\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n'+(null!=(s=l["if"].call(r,null!=a?a.canOpen:a,{name:"if",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t}))?s:"")+(null!=(s=l["if"].call(r,null!=a?a.canView:a,{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.noop,data:t}))?s:"")+(null!=(s=l["if"].call(r,null!=a?a.tracked:a,{name:"if",hash:{},fn:n.program(13,t,0),inverse:n.noop,data:t}))?s:"")+(null!=(s=l["if"].call(r,null!=a?a.canBan:a,{name:"if",hash:{},fn:n.program(15,t,0),inverse:n.noop,data:t}))?s:"")+'    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">'+(null!=(s=l["if"].call(r,null!=a?a.userIp:a,{name:"if",hash:{},fn:n.program(17,t,0),inverse:n.program(19,t,0),data:t}))?s:"")+'</td>\n<td class="visitor">'+c((i=null!=(i=l.stateDesc||(null!=a?a.stateDesc:a))?i:o,typeof i===u?i.call(r,{name:"stateDesc",hash:{},data:t}):i))+'</td>\n<td class="visitor">'+c((i=null!=(i=l.agentName||(null!=a?a.agentName:a))?i:o,typeof i===u?i.call(r,{name:"agentName",hash:{},data:t}):i))+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+c((i=null!=(i=l.totalTime||(null!=a?a.totalTime:a))?i:o,typeof i===u?i.call(r,{name:"totalTime",hash:{},data:t}):i))+'"></span></td>\n<td class="visitor">'+(null!=(s=l.unless.call(r,null!=a?a.chatting:a,{name:"unless",hash:{},fn:n.program(21,t,0),inverse:n.program(23,t,0),data:t}))?s:"")+'</td>\n<td class="visitor">'+(null!=(s=l["if"].call(r,null!=a?a.ban:a,{name:"if",hash:{},fn:n.program(25,t,0),inverse:n.program(27,t,0),data:t}))?s:"")+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/status_panel"]=Handlebars.template({1:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Away",{name:"l10n",hash:{},data:t}))},3:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},"Up to date",{name:"l10n",hash:{},data:t}))},5:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},'Set status as "Available"',{name:"l10n",hash:{},data:t}))},7:function(n,a,l,e,t){return n.escapeExpression((l.l10n||a&&a.l10n||l.helperMissing).call(null!=a?a:n.nullContext||{},'Set status as "Away"',{name:"l10n",hash:{},data:t}))},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i,r=null!=a?a:n.nullContext||{};return'<div id="connection-status">'+n.escapeExpression((i=null!=(i=l.message||(null!=a?a.message:a))?i:l.helperMissing,"function"==typeof i?i.call(r,{name:"message",hash:{},data:t}):i))+(null!=(s=l["if"].call(r,null!=(s=null!=a?a.agent:a)?s.away:s,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t}))?s:"")+'</div><div id="connection-controls"><a href="javascript:void(0);" id="change-status">'+(null!=(s=l["if"].call(r,null!=(s=null!=a?a.agent:a)?s.away:s,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.program(7,t,0),data:t}))?s:"")+"</a></div>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/threads_collection"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s=null!=a?a:n.nullContext||{},i=l.helperMissing,r=n.escapeExpression;return'<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+r((l.l10n||a&&a.l10n||i).call(s,"Name",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Actions",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Visitor's address",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"State",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Operator",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Total time",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Waiting time",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Misc",{name:"l10n",hash:{},data:t}))+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/visitor"]=Handlebars.template({1:function(n,a,l,e,t){var s,i=null!=a?a:n.nullContext||{},r=l.helperMissing,o=n.escapeExpression;return'<a href="javascript:void(0);" class="invite-link" title="'+o((l.l10n||a&&a.l10n||r).call(i,"Invite to chat",{name:"l10n",hash:{},data:t}))+'">'+o((s=null!=(s=l.userName||(null!=a?a.userName:a))?s:r,"function"==typeof s?s.call(i,{name:"userName",hash:{},data:t}):s))+"</a>"},3:function(n,a,l,e,t){var s;return n.escapeExpression((s=null!=(s=l.userName||(null!=a?a.userName:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"userName",hash:{},data:t}):s))},5:function(n,a,l,e,t){var s;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+n.escapeExpression((s=null!=(s=l.remote||(null!=a?a.remote:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"remote",hash:{},data:t}):s))+"</a>"},7:function(n,a,l,e,t){var s;return n.escapeExpression((s=null!=(s=l.remote||(null!=a?a.remote:a))?s:l.helperMissing,"function"==typeof s?s.call(null!=a?a:n.nullContext||{},{name:"remote",hash:{},data:t}):s))},9:function(n,a,l,e,t){var s;return n.escapeExpression(n.lambda(null!=(s=null!=a?a.invitationInfo:a)?s.agentName:s,a))},11:function(n,a,l,e,t){return"-"},13:function(n,a,l,e,t){var s;return'<span class="timesince" data-timestamp="'+n.escapeExpression(n.lambda(null!=(s=null!=a?a.invitationInfo:a)?s.time:s,a))+'"></span>'},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s,i,r=null!=a?a:n.nullContext||{},o=l.helperMissing,u=n.escapeExpression,c="function";return'<td class="visitor">\n    '+(null!=(s=l.unless.call(r,null!=a?a.invitationInfo:a,{name:"unless",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t}))?s:"")+'\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="'+u((l.l10n||a&&a.l10n||o).call(r,"Tracked visitor's path",{name:"l10n",hash:{},data:t}))+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">'+(null!=(s=l["if"].call(r,null!=a?a.userIp:a,{name:"if",hash:{},fn:n.program(5,t,0),inverse:n.program(7,t,0),data:t}))?s:"")+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+u((i=null!=(i=l.firstTime||(null!=a?a.firstTime:a))?i:o,typeof i===c?i.call(r,{name:"firstTime",hash:{},data:t}):i))+'"></span></td>\n<td class="visitor"><span class="timesince" data-timestamp="'+u((i=null!=(i=l.lastTime||(null!=a?a.lastTime:a))?i:o,typeof i===c?i.call(r,{name:"lastTime",hash:{},data:t}):i))+'"></span></td>\n<td class="visitor">'+(null!=(s=l["if"].call(r,null!=a?a.invitationInfo:a,{name:"if",hash:{},fn:n.program(9,t,0),inverse:n.program(11,t,0),data:t}))?s:"")+'</td>\n<td class="visitor">'+(null!=(s=l["if"].call(r,null!=a?a.invitationInfo:a,{name:"if",hash:{},fn:n.program(13,t,0),inverse:n.program(11,t,0),data:t}))?s:"")+'</td>\n<td class="visitor">'+u((i=null!=(i=l.invitations||(null!=a?a.invitations:a))?i:o,typeof i===c?i.call(r,{name:"invitations",hash:{},data:t}):i))+" / "+u((i=null!=(i=l.chats||(null!=a?a.chats:a))?i:o,typeof i===c?i.call(r,{name:"chats",hash:{},data:t}):i))+'</td>\n<td class="visitor">'+u((i=null!=(i=l.userAgent||(null!=a?a.userAgent:a))?i:o,typeof i===c?i.call(r,{name:"userAgent",hash:{},data:t}):i))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/visitors_collection"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(n,a,l,e,t){var s=null!=a?a:n.nullContext||{},i=l.helperMissing,r=n.escapeExpression;return'<table id="visitors-list" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+r((l.l10n||a&&a.l10n||i).call(s,"Name",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Actions",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Visitor's address",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"First seen",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Last seen",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Invited by",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Invitation time",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Invitations / Chats",{name:"l10n",hash:{},data:t}))+"</th>\n    <th>"+r((l.l10n||a&&a.l10n||i).call(s,"Misc",{name:"l10n",hash:{},data:t}))+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>'},useData:!0})}();
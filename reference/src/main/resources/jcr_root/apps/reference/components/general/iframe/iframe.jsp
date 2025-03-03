<%-- /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ --%>
<%@include file="/libs/sling-cms/global.jsp"%>
<c:if test="${not empty properties.src}">
    <sling:adaptTo adaptable="${slingRequest.requestPathInfo.suffixResource}" adaptTo="org.apache.sling.cms.ComponentConfiguration" var="cmpCfg" />
    <div class="${sling:encode(properties.wrapperClass,'HTML_ATTR')}}">
        <iframe src="${sling:encode(properties.src,'HTML_ATTR')}" class="${sling:encode(cmpCfg.properties.iframeClass,'HTML_ATTR')}" ${properties.allowFullscreen}></iframe>
    </div>
</c:if>
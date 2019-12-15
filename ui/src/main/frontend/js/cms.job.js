/*
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
 */
/* eslint-env browser, es6 */
(function (rava, Sling) {
    'use strict';
    
    rava.bind('.job-properties-container', {
        callbacks : {
            created :  function () {
                const container = this;
                document.querySelector(container.dataset.source).addEventListener('change', async function () {
                    const sourceSelect = this;
                    const config = this.value;
                    sourceSelect.disabled = true;
                    container.innerHTML = '';
                    
                    const response = await fetch(container.dataset.path + config);
                    if(response.ok){
                        const formHtml = await response.text();
                        container.innerHTML = formHtml;
                        sourceSelect.disabled = false;
                    } else {
                        Sling.CMS.ui.confirmMessage(response.status, response.statusText, function () {});
                    }
                    
                });
            }
        }
    });
}(window.rava = window.rava || {}, window.Sling = window.Sling || {}));
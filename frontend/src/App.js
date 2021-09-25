import React, { useEffect, useState } from "react";

import moment from 'moment';
// import styles from "./App.css";
import "./App.css";
import { toolsMenuData } from "./mockdata";
import { SimulationIframe } from "./components/SimulationIframe";

export const App = ()=>{
const [myToolsdata, setMyToolsdata] = useState(toolsMenuData);
const [selectedtool, setSelectedTool] = useState({});
const [isResizeExplorer, setResizeExplorer] = useState(false);
const [isResizeViewer, setResizeViewer] = useState(false);
const [filteredToolData, setFilteredToolData] = useState(toolsMenuData);


const onClickTool = toolID => {
  const foundTool = filteredToolData?.find(item=>item.id === toolID);
  setSelectedTool(foundTool);
}

const onClickResizeExplorer = ()=>{
  setResizeExplorer(!isResizeExplorer);
}

const onClickResizeViewer = ()=>{
  setResizeViewer(!isResizeViewer);
}

const onSearchTools = event=>{
const searchString =   event.target.value?.toLowerCase();
const foundResultOnSearchString = myToolsdata?.filter(tool => tool?.title?.toLowerCase()?.includes(searchString));
setFilteredToolData(foundResultOnSearchString);
}

return (
    <div>
      {/* Simulation POC */}
    <div className="custom-tabs-section">
      <div class="custom-tabs-panel">
        <div class="menu-bar-icon">
            <i class="bi bi-list"></i>
        </div>
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" href="#tools" role="tab" data-toggle="tab">My Tools</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#workspace" role="tab" data-toggle="tab">My Workspace</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#library" role="tab" data-toggle="tab">Library</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#sharing" role="tab" data-toggle="tab">Sharing</a>
            </li>
        </ul>
    </div>

    {/*  Tab panes */}
   <div class="tabs-body-section">
        <div class="tab-content ">
            <div role="tabpanel" class="tab-pane fade in active show" id="tools">
                <div class="tabs-body-panel">
                    {!isResizeViewer && <div class="tabs-left-body">
                        <div id="accordion" class="accordion">
                            <div class="card mb-0">
                                <div class="card-header">
                                    <span class="card-title collapsed"> Explorer
                                    </span>
                                    <div class="icon-header">
                                        <i id="explorer" class="bi bi-dash" data-toggle="collapse" href="#collapseOne"
                                        // onClick={onClickMiniExplorer}
 />
                                        <i class="bi bi-arrows-angle-expand" 
                                        onClick={onClickResizeExplorer}
                                        />
                                        <i class="bi bi-chevron-down" />
                                    </div>                                    
                                </div>
                                <div id="collapseOne" class="card-body  fade in show collapse" >
                                    <div class="collapse-body-panel">
                                        <div class="my-tools">
                                            <div class="my-tool-header" style={{borderRight:'solid 1px #ccc'}}>
                                                <h6>My Tools</h6>
                                                <a><span style={{ fontSize: 10 }}>All</span> 
                                                <i class="bi bi-arrow-left-right" style={{ fontSize: 10 }} />
                                                </a>
                                            </div>
                                            <div class="my-tool-body search-button">
                                                <div class="input-group">
                                                    <input type="text" onChange={(e)=>onSearchTools(e)}/>
                                                    <div class="input-group-append">
                                                      <button  type="button" >
                                                      <i class="bi bi-search" />
                                                      </button>
                                                    </div>
                                                  </div>

                                            <div class="tool-list">
                                                  {filteredToolData?.map(tool => <div class={selectedtool?.id === tool?.id ? "recipe-selected" : "recipe"}>
                                                      <span onClick={()=>onClickTool(tool.id)}>{tool.title}</span>
                                                    </div>)}
                                            </div>

                                              </div>
                                        </div>
                                        <div class="selected-my-tools">
                                            <div class="my-tool-header">
                                              <h6>{selectedtool.title}</h6>
                                                <a><i class="bi bi-briefcase-fill" /></a>
                                            </div>

                                            <div class="my-tool-section">
                                                <div class="my-tool-body">
                                                <button class="btn btn-primary btn-block" type="button" style={{backgroundColor:'#00508b'}}>
                                                        <i class="bi bi-play-circle" />                                               
                                                        <span>Run Tool</span>
                                                    </button>
                                                    <p>Previours Runs:</p>
                                                    <div class="previous-list-panel">
                                                    <i class="bi bi-file-earmark-text" />  
                                                       <div class="content-list">
                                                            <span>No Descriptions Entered</span>
                                                            <p>{moment(Date.now()).format('DD MMM YYYY')}</p>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="previous-list-panel">
                                                    <i class="bi bi-file-earmark-text" />                                                       
                                                        <div class="content-list">
                                                            <span>No Descriptions Entered</span>
                                                            <p>{moment('2021-09-20T07:57:45.121Z').format('DD MMM YYYY')}</p>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="previous-list-panel">
                                                    <i class="bi bi-file-earmark-text" />                                                       
                                                       <div class="content-list">
                                                            <span>No Descriptions Entered</span>
                                                            <p>{moment('2021-09-20T07:57:45.121Z').format('DD MMM YYYY')}</p>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="previous-list-panel">
                                                    <i class="bi bi-file-earmark-text" />                                                       
                                                        <div class="content-list">
                                                            <span>No Descriptions Entered</span>
                                                            <p>{moment('2021-09-20T07:57:45.121Z').format('DD MMM YYYY')}</p>
                                                        </div>                                                        
                                                    </div>
                                                    <div class="previous-list-panel">
                                                    <i class="bi bi-file-earmark-text" />                                                       
                                                        <div class="content-list">
                                                            <span>No Descriptions Entered</span>
                                                            <p>{moment(Date.now()).format('DD MMM YYYY')}</p>
                                                        </div>                                                        
                                                    </div>

                                                    {/* <div>
                                                {'page 5'}
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>}
                    {!isResizeExplorer && <div class="tabs-right-body">
                        <div id="accordion" class="accordion">
                            <div class="card mb-1">
                                <div class="card-header">
                                    <span class="card-title collapsed" > Viewer
                                    </span>
                                    <div class="icon-header">
                                    <i id="viewer" class="bi bi-dash" data-toggle="collapse" href="#collapsetwo" />
                                        <i class="bi bi-arrows-angle-expand" 
                                          onClick={onClickResizeViewer}
                                        />
                                        <i class="bi bi-chevron-down" />
                                    </div>                                    
                                </div>
                                <div id="collapsetwo" class="card-body fade in show collapse" >
                                    <div class="right-body-section">
                                          <SimulationIframe selectedtool={selectedtool} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="workspace">MY Workspace</div>
            <div role="tabpanel" class="tab-pane fade" id="library">Library</div>
            <div role="tabpanel" class="tab-pane fade" id="sharing">Sharing</div>
        </div>
    </div> 
  </div>

    {/* Closing Body */}
</div>

  );
}


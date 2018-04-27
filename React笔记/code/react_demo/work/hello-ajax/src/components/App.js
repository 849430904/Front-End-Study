import React from 'react';
import Search from './Search';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态 初始化的搜索的关键字
    this.state = {
      searchName : ''
    }
  }
  // 定义search的方法，这个方法是给Search组件用的
  getSearchName = (searchName) => {
    // 更新状态
    this.setState({searchName});
  };
  render () {
    return (
      <div className="container">
        <Search getSearchName={this.getSearchName}/>
        <List searchName={this.state.searchName}/>{/*将Search组件中的searchName以标签属性的形式转给List*/}
      </div>
    );
  }
}


export default App;
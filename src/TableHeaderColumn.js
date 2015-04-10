import React from 'react';
import classSet from 'classnames';

class TableHeaderColumn extends React.Component{

  order: "desc"

  handleColumnClick(e){
    if(!this.props.dataSort)return;
    this.order = this.order == "desc"?"asc":"desc";
    this.props.clearSortCaret(this.order, this.props.dataField);
    this.refs.innerDiv.getDOMNode().appendChild(this.renderSortCaret());
  }

  render(){
    var thStyle = {
      textAlign: this.props.dataAlign
    };

    var classes = classSet(this.props.dataSort?"sort-column":"");

    return(
      <th className={classes} style={thStyle}>
        <div ref="innerDiv" className="th-inner table-header-column"
          onClick={this.handleColumnClick.bind(this)}>{this.props.children}</div>
      </th>
    )
  }

  renderSortCaret(){
    var wrap = document.createElement("span");
    wrap.className = "order";
    if(this.order == "asc") wrap.className += " dropup";
    var inner = document.createElement("span");
    inner.className = "caret";
    inner.style.margin = "10px 5px";
    wrap.appendChild(inner);
    return wrap;
  }
}
TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string,
  dataAlign: React.PropTypes.string,
  dataSort: React.PropTypes.bool,
  clearSortCaret: React.PropTypes.func
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left",
  dataSort: false
};

export default TableHeaderColumn;

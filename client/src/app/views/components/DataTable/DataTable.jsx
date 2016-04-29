import React from 'react';
import Table from 'material-ui/Table/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow from 'material-ui/Table/TableRow'
import TableHeader from 'material-ui/Table/TableHeader'
import TableRowColumn from 'material-ui/Table/TableRowColumn'
import TableBody from 'material-ui/Table/TableBody'

import DataTableToolbar from './DataTableToolbar.jsx'

export default class DataTable extends React.Component {
  // static delay = 1000 // delay between query field change and request send

  static propTypes = {
    schema: React.PropTypes.array,
    items: React.PropTypes.array,
    search: React.PropTypes.func,
    goDetail: React.PropTypes.func,
  }

  constructor() {
    super()
    this.state = {
      items: [],
      query: {
        field: '',
        keyword: '',
      },
      timer: null,
      selectedRows: [],
      showDetailButton: false,
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.items !== this.state.items) {
      this.setState({
        items: newProps.items,
      })
    }
  }
  
  onRowSelection(selectedRows) {
    this.setState({
      showDetailButton: selectedRows.length > 0,
      selectedRows,
    })

  }
  render() {
    const selectedItem = this.state.items[this.state.selectedRows]
    return (
      <div>
        <DataTableToolbar
          newItem={this.props.newItem}
          schema={this.props.schema}
          search={this.props.search}
          goDetail={this.props.goDetail(selectedItem)}
          showDetailButton={this.state.showDetailButton}
        />
        <Table onRowSelection={::this.onRowSelection}>
          <TableHeader>
            <TableRow>
              {this.props.schema.map(field =>
                <TableHeaderColumn key={field.id}>
                  {field.displayName}
                </TableHeaderColumn>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.items.map((item, index) =>
              <TableRow
                key={index}
                selected={this.state.selectedRows.indexOf(index) !== -1}>
                { this.props.schema.map(field =>
                  <TableRowColumn key={field.id}>
                    {item[field.name]}
                  </TableRowColumn>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  }
}


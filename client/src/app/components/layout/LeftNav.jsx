import React from 'react'
import Drawer from 'material-ui/Drawer'
import { List, ListItem, MakeSelectable } from 'material-ui/List'
import { spacing, typography, zIndex } from 'material-ui/styles'
import { cyan500 } from '../../../../node_modules/material-ui/styles/colors'

const SelectableList = MakeSelectable(List);

class LeftNav extends React.Component {
  static propTypes = {
    docked: React.PropTypes.bool.isRequired,
    location: React.PropTypes.object.isRequired,
    onChangeList: React.PropTypes.func.isRequired,
    onRequestChangeNavDrawer: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  }
  
  static styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 24,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan500,
      paddingLeft: spacing.desktopGutter,
      marginBottom: 8,
    },
  }

  handleTouchTapHeader() {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  }


  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.navDrawer - 100}}
      >
        <div style={LeftNav.styles.logo} onTouchTap={::this.handleTouchTapHeader}>
          Ant
        </div>

        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem primaryText="产品价格" value="/product"/>
        </SelectableList>
      </Drawer>
    )
  }
}



export default LeftNav;
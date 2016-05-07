import React from 'react'
import AppBar from 'material-ui/AppBar'
import getMuiTheme from '../../../../node_modules/material-ui/styles/getMuiTheme'
import spacing from '../../../../node_modules/material-ui/styles/spacing'
import styleResizable from '../../../../node_modules/material-ui/utils/styleResizable'

import Resizable from './Resizable.jsx'
import LeftNav from './LeftNav.jsx'

class MainContent extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      muiTheme: getMuiTheme(),
      leftNavOpen: false,
    }
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    }
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
        left: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
    }

    if (this.props.isDeviceSize(styleResizable.statics.Sizes.MEDIUM) ||
      this.props.isDeviceSize(styleResizable.statics.Sizes.LARGE)) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles
  }

  handleTouchTapLeftIconButton() {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen,
    });
  }

  handleChangeRequestNavDrawer(open) {
    this.setState({
      leftNavOpen: open,
    });
  }

  handleChangeList(event, value) {
    this.context.router.push(value);
    this.setState({
      leftNavOpen: false,
    });
  }

  render() {
    const {
      children,
    } = this.props;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    const styles = this.getStyles();
    let docked = false;

    let {
      leftNavOpen,
    } = this.state;


    const router = this.context.router;
    const title =
      router.isActive('/services') ? '服务项目' :
        router.isActive('/products') ? '产品价格' :
          router.isActive('/orders') ? '订单' :
            router.isActive('/step') ? '状态' : ''

    if (this.props.isDeviceSize(styleResizable.statics.Sizes.LARGE) && title !== '') {
      docked = true;
      leftNavOpen = true;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
    }

    const testStyle = {
      width: '100%',
    }
    return (
      <div style={testStyle}>
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton.bind(this)}
          zDepth={0}
          style={styles.appBar}
        />

        { title !== '' ?
          <div style={prepareStyles(styles.root)}>
            <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children)}
            </div>
          </div> :
          children
        }

        <LeftNav
          style={styles.navDrawer}
          docked={docked}
          onRequestChangeNavDrawer={::this.handleChangeRequestNavDrawer}
          onChangeList={::this.handleChangeList}
          open={leftNavOpen}
          location={location}
        />
      </div>
    );
  }
}

class Main extends Resizable {

  render() {
    return <MainContent {...this.props} isDeviceSize={::this.isDeviceSize}/>
  }
}

export default Main


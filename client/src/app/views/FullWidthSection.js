import React from 'react';
import ClearFix from 'material-ui/internal/ClearFix';
import spacing from 'material-ui/styles/spacing';

const desktopGutter = spacing.desktopGutter;

class FullWidthSection extends React.Component {



  getStyles() {
    return {
      root: {
        padding: desktopGutter,
        boxSizing: 'border-box',
      },
      content: {
        maxWidth: 1200,
        margin: '0 auto',
      }
    };
  }

  render() {
    const {
      style,
      useContent,
      contentType,
      contentStyle,
      ...other,
    } = this.props;

    const styles = this.getStyles();

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          {style: Object.assign(styles.content, contentStyle)},
          this.props.children
        );
    } else {
      content = this.props.children;
    }

    return (
      <ClearFix
        {...other}
        style={Object.assign(
          styles.root,
          style)}>
        
        {content}
      </ClearFix>
    )
  }
}

FullWidthSection.propTypes = {
  children: React.PropTypes.node,
  contentStyle: React.PropTypes.object,
  contentType: React.PropTypes.string,
  style: React.PropTypes.object,
  useContent: React.PropTypes.bool,
}

FullWidthSection.defaultProps = {
  useContent: false,
  contentType: 'div',
}

export default FullWidthSection

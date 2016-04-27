import React from 'react';
import Quagga from 'quagga';

export default React.createClass({
  propTypes: {
    onDetected: React.PropTypes.func.isRequired
  },
  
  render() {
    return (
      <div id="interactive" className="viewport" />
    );
  },

  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
      },
      decoder: {
        readers: ["code_128_reader"]
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 4,
      locate: true
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
    Quagga.onProcessed(this.onProcessed);
  },

  onProcessed(result) {
    var drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
      }
    }
  },
  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  },

  _onDetected(result) {
    this.props.onDetected(result);
    Quagga.stop()
  }
});
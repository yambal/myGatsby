import React from "react"

interface iLazyImgProps {
    thumb: string
    src: string
}

class LazyImg extends React.Component<iLazyImgProps> {
    frontImgRef = React.createRef<HTMLImageElement>()

    state = {
        opacity: 0
    }

    componentDidMount = () => {
        this.frontImgRef.current.onload = (e) => {
            console.log('loaded')
            this.setState({
                opacity: 1
            })
        }
    }

    render() {
        const style = {
            transition: 'opacity 2s linear 0.5s',
            opacity: this.state.opacity,
            display: 'block',
            position: 'absolute',
            top : 0,
            right: 0,
            bottom : 0,
            lefy: 0
        }
        return(
            <React.Fragment>
                <div style={{ position: 'relative' }}>
                    <img src={this.props.thumb} />
                    <img src={this.props.src} ref={this.frontImgRef} style={style}/>
                </div>
            </React.Fragment>
        )
    }
}

export default LazyImg

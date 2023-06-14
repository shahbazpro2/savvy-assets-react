import AssetTracking from "./AssetTracking"
import Assets from "./Assets"
import Features from "./Features"
import Sensors from "./Sensors"
import Top from "./Top"
import Vison from "./Vison"

const Platform = () => {
    return (
        <>
            <Top />
            <Assets />
            <Vison />
            <Sensors />
            <AssetTracking />
            <Features />
        </>
    )
}

export default Platform
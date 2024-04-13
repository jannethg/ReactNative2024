import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ({ route, navigation }) => {
    const campsite = route.params.campsite;
    const { id, elevation, description} = route.params.campsite;
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInfoScreen;

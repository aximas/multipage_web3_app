import factory from '../../ethereum/factory';

export const campaignData = async () => {
    try {
        const res = await factory.methods.getDeployedCampaigns().call();
        return await res;
    } catch (e) {
        console.log(e);
    }
}
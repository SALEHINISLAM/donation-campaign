const getDonation=()=>{
    const donations=localStorage.getItem('donation');
    if (donations) {
        return JSON.parse(donations);
    }
    return [];
}
const saveDonation=(id)=>{
    const previousDonations=getDonation();
    const donationExist=previousDonations.find(donation=>donation===id);
    if (!donationExist) {
        previousDonations.push(id);
        localStorage.setItem('donation',JSON.stringify(previousDonations));
    }
}
export {getDonation, saveDonation}
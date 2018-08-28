/*
This file contains the callbacks that you can modify to test the display of your widget

The method loadData allows you to mock the data retrieved by your API : by default, loadData returns an empty object

The method openPartnerLink allows you to open your application in a new tabulation - this is only relevant if you have a link in your
widget for redirecting to your application : by default, openPartnerLink does nothing
*/

export function loadData(partnerName: string) {
    const data = [
        {totalInDays: 1, TypeAbbreviation: 'RTT', StartDate: '2018/05/10', EndDate: '2018/05/10', State: 3},
        {totalInDays: 2, TypeAbbreviation: 'CP', StartDate: '2018/05/09', EndDate: '2018/05/10', State: 5},
        {totalInDays: 3, TypeAbbreviation: 'CP', StartDate: '2018/04/07', EndDate: '2018/04/06', State: 6},
        {totalInDays: 5, TypeAbbreviation: 'RTT', StartDate: '2018/02/10', EndDate: '2018/02/17', State: 3},
        {totalInDays: 10, TypeAbbreviation: 'CP', StartDate: '2017/12/23', EndDate: '2018/01/05', State: 5},
        {totalInDays: 0.5, TypeAbbreviation: 'CP', StartDate: '2018/07/07', EndDate: '2018/07/07', State: 6},
        {totalInDays: 3, TypeAbbreviation: 'CP', StartDate: '2018/04/07', EndDate: '2018/04/06', State: 6},
        {totalInDays: 5, TypeAbbreviation: 'RTT', StartDate: '2018/02/10', EndDate: '2018/02/17', State: 3},
        {totalInDays: 10, TypeAbbreviation: 'CP', StartDate: '2017/12/23', EndDate: '2018/01/05', State: 5},
        {totalInDays: 0.5, TypeAbbreviation: 'CP', StartDate: '2018/07/07', EndDate: '2018/07/07', State: 6},
    ];

    return Promise.resolve(data);
}

// export function loadData(partnerName: string) {
//     const data = [
//         {Title: 'tasks', Type: 'tasks', TotalElementCount: 10, NewElementCount: 5},
//         {Title: 'vacancies', Type: 'vacancies', TotalElementCount: 18, NewElementCount: 3},
//         {Title: 'candidates', Type: 'candidates', TotalElementCount: 35, NewElementCount: 8}
//     ];

//     return Promise.resolve(data);
// }

export function openPartnerLink(partnerName: string) {
    const partnerUrl:string = 'https://eddws.bodet-software.com';

    const win = window.open(partnerUrl, '_blank');
    if (win)
    {
        win.focus();
    } 

    return Promise.resolve(() => { 
    })
}
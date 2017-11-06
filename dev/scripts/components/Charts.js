import React from 'react';

export default class Charts extends React.Component {
    constructor () {
        super();

            const getData = () => {
                axios.get('https://thecountedapi.com/api/counted')
                .then(function (res) {
                   const deaths = res.data;
                //    console.log(deaths)
                   parseData(deaths)
                })
                .catch(function (error) {
                    console.log(error);
                });
            };

            getData()

            const parseData = (deaths) => {
                const parseData = (deaths) => {
                    const deathNames = deaths.map(function (death) {
                        return death.name
                        console.log(deathNames)
                    });
                    const deathAge = deaths.map(function (death) {
                        return death.age
                    });
                    const deathRace = deaths.map(function (death) {
                        return death.race
                    });
                }
            }
        } 

    render() {
        return (
            <section>
                <h2> this is the charts... </h2>
            </section>
        )
    }
}

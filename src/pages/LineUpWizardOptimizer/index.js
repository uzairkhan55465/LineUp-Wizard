import React from 'react'
import LineUpWizardOptimizerSectionOne from './Components/lineUpWizardOptimizerSectionOne'
import LineUpOptimizerSectionTwo from './Components/lineUpOptimizerSectionTwo'
import LineUpOptimizerthirdSection from './Components/lineUpOptimizerthirdSection'
import LineUpWizardOptimizerCards from './Components/lineUpOptimizfirstSection'
const LineUpWizardOptimizer = () => {
    return (
        <div >
            <div >
                <LineUpWizardOptimizerSectionOne />
            </div>
            <div >
                <LineUpWizardOptimizerCards />
            </div>
            <div >
                <LineUpOptimizerSectionTwo />
            </div>
            <div >
                <LineUpOptimizerthirdSection />
            </div>

        </div>
    )
}

export default LineUpWizardOptimizer
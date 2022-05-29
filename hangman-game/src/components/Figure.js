import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Figure = () => {
  const { wrongLetters } = useContext(GlobalContext)
  const errors = wrongLetters.length

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Box --> */}
      <line x1="6.27087" y1="364" x2="258" y2="364" stroke="white" stroke-width="10"/>
      <line x1="4.99975" y1="9.95025" x2="8.5719" y2="368.951" stroke="white" stroke-width="10"/>
      <line y1="5" x2="251.729" y2="5" stroke="white" stroke-width="10"/>

      {/* <!-- Rod --> */}
      {errors > 0 &&
        <path d="M140.893 12.3152C140.893 25.9388 142.849 40.2405 142.849 53.2616" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }

      {/* <!-- Head --> */}
      {errors > 1 &&
        <><path d="M142.849 53.2616C136.668 54.4638 117.872 54.9303 117.422 63.0107C116.987 70.8091 111.554 78.913 111.554 86.4087C111.554 96.6651 109.992 104.442 116.987 112.19C124.238 120.221 133.561 125.405 144.805 125.405C157.82 125.405 171.764 123.11 176.534 109.373C178.895 102.575 180.458 86.9653 175.665 80.9925C165.596 68.4454 157.024 62.2771 142.849 55.2114" stroke="white" stroke-width="5" stroke-linecap="round" /><path d="M131.113 88.3585C134.035 86.2405 148.312 75.8804 135.025 76.6595C131.604 76.8602 133.069 85.7856 133.069 88.3585" stroke="white" stroke-width="5" stroke-linecap="round" /><path d="M154.584 90.3082C154.584 95.1197 155.536 108.777 160.887 98.1075C163.685 92.5288 159.217 92.2581 154.584 92.2581" stroke="white" stroke-width="5" stroke-linecap="round" /><path d="M133.069 102.007C137.136 103.73 141.011 105.966 144.805 107.857" stroke="white" stroke-width="5" stroke-linecap="round" /></>
      }

      
      {/* <!-- Body --> */}
      {errors > 2 &&
        <path d="M140.893 131.255C131.694 133.001 104.256 138.006 99.8181 146.853" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }

      {/* <!-- Arms --> */}
      {errors > 3 &&
        <path d="M136.981 131.255C144.571 138.591 155.21 150.09 164.364 154.653" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }

      {errors > 4 &&
        <path d="M136.981 133.204C136.981 152.66 138.937 172.84 138.937 191.699" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }

      {/* <!-- Legs --> */}
      {errors > 5 &&
        <path d="M138.937 191.699C131.849 195.905 125.049 199.362 119.377 205.348C117.141 207.709 116.375 209.769 113.51 211.198" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }

      {errors > 6 &&
        <path d="M136.981 193.649C145.427 197.227 158.314 206.935 162.408 215.097" stroke="white" stroke-width="5" stroke-linecap="round"/>
      }
    </svg>
  )
}

export default Figure

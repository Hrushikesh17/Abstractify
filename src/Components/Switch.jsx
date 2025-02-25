import React from 'react';
import styled from 'styled-components';

const Switch = ({ onChange, checked }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input 
          type="checkbox" 
          onChange={onChange}
          checked={checked}
        />
        <span className="slider">
          <svg className="seed" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.004 512.004" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path style={{fill: '#e5c11f'}} d="M370.114,157.811C351.523,65.174,307.456,0,256,0c-51.447,0-95.514,65.174-114.114,157.811 c41.057,46.036,72.854,122.827,92.328,199.477C251.065,406.528,256,461.356,256,512c0-50.644,4.935-105.472,21.786-154.712 C297.269,280.638,329.057,203.847,370.114,157.811" /> <path style={{fill: '#AF6D2D'}} d="M256.002,512.004c0-138.664-77.241-397.241-194.207-397.241 C-19.966,351.668,96.373,512.004,256.002,512.004" /> <path style={{fill: '#864D18'}} d="M185.347,471.952c-1.121,0-2.26-0.221-3.363-0.671c-31.603-13.065-58.033-34.278-78.539-63.047 c-41.393-58.068-52.515-141.047-31.329-233.657c1.086-4.758,5.826-7.733,10.575-6.63c4.749,1.086,7.724,5.817,6.638,10.567 c-20.047,87.623-9.931,165.57,28.495,219.471c18.556,26.033,42.408,45.197,70.894,56.973c4.511,1.863,6.656,7.027,4.793,11.529 C192.1,469.895,188.816,471.952,185.347,471.952" /> <path style={{fill: '#AF6D2D'}} d="M256.002,512.004c0-138.664,77.241-397.241,194.207-397.241 C531.97,351.668,415.631,512.004,256.002,512.004" /> <path style={{fill: '#B49377'}} d="M184.403,141.249c-0.83,0-1.66-0.124-2.498-0.362c-4.67-1.377-7.353-6.285-5.976-10.964 c11.714-39.812,28.637-71.318,47.634-88.691c3.593-3.302,9.181-3.046,12.473,0.556c3.293,3.593,3.037,9.181-0.556,12.473 c-16.419,15.007-31.947,44.403-42.611,80.649C191.739,138.751,188.216,141.249,184.403,141.249" /> </g> </g></svg>
          <svg className="plant" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path style={{fill: '#8B4513'}} d="M252.899,512.002c-4.504,0-8.313-3.471-8.643-8.036c-7.706-104.222,3.662-160.516,11.186-197.762 c8.669-42.947,12.635-62.551-18.276-109.698c-2.629-4.009-1.51-9.39,2.499-12.019c4.009-2.629,9.39-1.519,12.019,2.499 c34.816,53.118,29.826,77.815,20.766,122.654c-7.775,38.487-18.415,91.205-10.891,193.041c0.356,4.782-3.237,8.947-8.01,9.294 C253.333,511.994,253.116,512.002,252.899,512.002" /> <g> <path style={{fill: '#91CF96'}} d="M252.908,512.002c0-81.651-45.481-234.305-114.35-234.305 C90.422,417.187,158.917,512.002,252.908,512.002" /> <path style={{fill: '#91CF96'}} d="M252.908,512.002c0-81.651,45.481-234.305,114.35-234.305 C415.394,417.187,346.899,512.002,252.908,512.002" /> <path style={{fill: '#91CF96'}} d="M270.264,277.697c-1.927,0-3.81-0.642-5.346-1.84c-2.013-1.579-3.237-3.966-3.332-6.517 c-2.994-81.868,59.184-115.538,118.376-119.747c2.3-0.148,4.565,0.599,6.3,2.1c1.736,1.51,2.803,3.645,2.968,5.944 c0.876,12.314-16.419,98.807-117.187,119.877C271.453,277.636,270.854,277.697,270.264,277.697" /> <path style={{fill: '#91CF96'}} d="M244.332,200.401c-0.963,0-1.927-0.165-2.846-0.495c-65.38-23.535-89.183-69.068-97.644-103.12 c-10.865-43.728-0.946-85.001,7.194-93.948c2.291-2.517,5.84-3.463,9.068-2.421c18.701,6.014,115.252,67.098,92.898,192.738 c-0.061,0.347-0.148,0.694-0.252,1.033c-0.694,2.265-2.308,4.209-4.434,5.268C247.074,200.071,245.703,200.401,244.332,200.401" /> </g> <g> <path style={{fill: '#5ABA63'}} d="M270.264,277.697c-2.187,0-4.382-0.824-6.075-2.482c-3.419-3.35-3.48-8.843-0.121-12.271 l53.404-54.524c3.358-3.428,8.852-3.48,12.271-0.13c3.428,3.35,3.489,8.843,0.13,12.271l-53.413,54.532 C274.768,276.829,272.512,277.697,270.264,277.697" /> <path style={{fill: '#5ABA63'}} d="M244.467,200.311c-3.15,0-6.187-1.718-7.732-4.712l-39.224-76.436 c-2.196-4.261-0.503-9.494,3.758-11.681c4.261-2.204,9.494-0.503,11.681,3.758l39.233,76.427c2.187,4.27,0.503,9.502-3.758,11.689 C247.157,200.008,245.795,200.311,244.467,200.311" /> </g> </g> </g></svg>
        </span>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    --mud: #8B4513;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom,skyblue 70%,var(--mud));
    transition: .4s;
    border-radius: 30px;
    border: 2px solid black;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    transition: .4s;
  }

  .plant {
    position: absolute;
    bottom: 3px;
    right: -30px;
    z-index: 3;
    opacity: 0;
  }

  .seed {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    transition: .4s;
  }

  .switch input:checked + .slider {
    background-color: #156829;
  }

  .switch input:focus + .slider {
    box-shadow: 0 0 1px #156829;
  }

  .switch input:checked + .slider:before,
  .switch input:checked + .slider .seed {
    transform: translateX(1.5em);
  }

  .switch input:checked + .slider .seed {
    opacity: 0;
  }

  .switch input:checked + .slider .plant {
    animation: zoomIn 0.5s forwards;
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }`;

export default Switch;

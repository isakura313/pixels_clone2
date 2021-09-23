<template>
 <div class="loader_wrap">
  <div class="ajax-loader">
   <div class="ajax-loader-circle">
    <svg class="ajax-loader-circle-svg" viewBox="0 0 500 500">
     <circle cx="250" cy="250" r="239" />
    </svg>
   </div>
  </div>
 </div>
</template>

<style lang="scss">
.loader_wrap {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

$loader_duration: 1.4s;
$loader_offset: 1570; // (2 x pie x r = 250 (from svg))

.ajax-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform-origin: (50%, 50%);
  animation: ajaxLoaderSpin $loader_duration linear infinite;
}

.ajax-loader-circle-svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-origin: (50%, 50%);
  animation: ajaxLoaderDashSpin $loader_duration ease-in-out infinite;
}

circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: ajaxLoaderColors ($loader_duration * 4) ease-in-out infinite,
    ajaxLoaderDash $loader_duration ease-in-out infinite;
  stroke-dasharray: $loader_offset;
  stroke-width: 19;
  fill: none;
}

// Spinner
@keyframes ajaxLoaderSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes ajaxLoaderColors {
  0% {
    stroke: #35ad0e;
  }
  25% {
    stroke: #d8ad44;
  }
  50% {
    stroke: #d00324;
  }
  75% {
    stroke: #dc00b8;
  }
  100% {
    stroke: #017efc;
  }
}

@keyframes ajaxLoaderDash {
  0% {
    stroke-dashoffset: $loader_offset * 0.9;
  }
  50% {
    stroke-dashoffset: $loader_offset * 0.25;
  }
  100% {
    stroke-dashoffset: $loader_offset * 0.9;
  }
}

@keyframes ajaxLoaderDashSpin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(450deg);
  }
} ;
</style>

/* ===== Google Maps Module ===== */
const YEN_TU = { lat: 21.1289, lng: 106.7158 }; /* Yen Tu Mountain, Quang Ninh, Vietnam */

const MapModule = (() => {
  let map = null;
  let marker = null;

  function init() {
    const container = document.getElementById('map-container');
    if (!container || typeof google === 'undefined') return;

    map = new google.maps.Map(container, {
      center: YEN_TU,
      zoom: 13,
      mapTypeId: 'terrain',
      styles: [
        { elementType: 'geometry',        stylers: [{ color: '#f5f5f0' }] },
        { elementType: 'labels.text.fill',stylers: [{ color: '#616161' }] },
        { featureType: 'water',           elementType: 'geometry', stylers: [{ color: '#c8d8e8' }] },
        { featureType: 'water',           elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
        { featureType: 'road',            elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { featureType: 'road.arterial',   elementType: 'geometry', stylers: [{ color: '#f5f5f0' }] },
        { featureType: 'road.highway',    elementType: 'geometry', stylers: [{ color: '#e8e0d0' }] },
        { featureType: 'landscape.natural',elementType:'geometry', stylers:[{ color:'#dde0d0' }] },
        { featureType: 'poi',             elementType: 'labels', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit',         elementType: 'labels', stylers: [{ visibility: 'off' }] },
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });

    /* Custom SVG marker */
    const svgMarker = {
      path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
      fillColor: '#c9a84c',
      fillOpacity: 1,
      strokeColor: '#8a6f2e',
      strokeWeight: 1.5,
      scale: 2,
      anchor: new google.maps.Point(12, 24),
    };

    marker = new google.maps.Marker({
      position: YEN_TU,
      map,
      title: 'Yen Tu — Zen Spark Gallery',
      icon: svgMarker,
      animation: google.maps.Animation.DROP,
    });

    const infoContent = `
      <div style="font-family:'Noto Sans KR',sans-serif;padding:8px 4px;max-width:220px;">
        <div style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:#c9a84c;margin-bottom:4px;">Zen Spark Gallery</div>
        <div style="font-size:1rem;font-weight:400;color:#0a0a0a;margin-bottom:6px;">Yen Tu Mountain</div>
        <div style="font-size:0.78rem;color:#6b6b6b;line-height:1.6;">
          Dong Trieu, Quang Ninh<br>Vietnam
        </div>
        <a href="https://maps.google.com/?q=21.1289,106.7158" target="_blank"
           style="display:inline-block;margin-top:8px;font-size:0.72rem;color:#c9a84c;text-decoration:none;">
          Google Maps에서 보기 →
        </a>
      </div>`;

    const infoWindow = new google.maps.InfoWindow({ content: infoContent });
    marker.addListener('click', () => infoWindow.open(map, marker));

    /* Open info window by default */
    setTimeout(() => infoWindow.open(map, marker), 800);
  }

  /* Called by Google Maps script callback */
  window.initGoogleMap = init;

  return { init };
})();

window.MapModule = MapModule;

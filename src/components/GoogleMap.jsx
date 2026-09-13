import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      try {
        setOptions({
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          v: "weekly",
        });

        const { Map, InfoWindow } = await importLibrary("maps");
        const { AdvancedMarkerElement } = await importLibrary("marker");

        const venue = {
          lat: -6.645191993349406,
          lng: 106.84130407499401,
        };

        const map = new Map(mapRef.current, {
          center: venue,
          zoom: 16,
          mapId: "DEMO_MAP_ID",

          mapTypeControl: true,
          zoomControl: true,
          streetViewControl: true,
          fullscreenControl: true,

          gestureHandling: "greedy",
        });

        // =========================
        // CUSTOM MARKER
        // =========================

        const markerContent = document.createElement("div");

        markerContent.innerHTML = `
          <div class="wikcup-marker">
            <div class="wikcup-marker-icon">
              🏆
            </div>

            <div class="wikcup-marker-text">
              <strong>WIKRAMA CUP</strong>
              <span>2026</span>
            </div>

            <div class="wikcup-marker-point"></div>
          </div>

          <style>
            .wikcup-marker {
              position: relative;
              display: flex;
              align-items: center;
              gap: 8px;

              padding: 7px 13px 7px 7px;

              background:
                linear-gradient(
                  135deg,
                  #f5931c,
                  #f8bb28
                );

              color: #111827;

              border: 3px solid white;
              border-radius: 999px;

              box-shadow:
                0 8px 25px rgba(0, 0, 0, 0.35),
                0 0 25px rgba(248, 187, 40, 0.35);

              font-family: Arial, sans-serif;
              white-space: nowrap;

              cursor: pointer;

              transform: translateY(-5px);

              transition:
                transform 0.25s ease,
                box-shadow 0.25s ease;
            }

            .wikcup-marker:hover {
              transform:
                translateY(-9px)
                scale(1.05);

              box-shadow:
                0 14px 35px rgba(0, 0, 0, 0.4),
                0 0 35px rgba(248, 187, 40, 0.55);
            }

            .wikcup-marker-icon {
              width: 34px;
              height: 34px;

              display: flex;
              align-items: center;
              justify-content: center;

              background: #111827;
              border-radius: 50%;

              font-size: 18px;
            }

            .wikcup-marker-text {
              display: flex;
              flex-direction: column;

              line-height: 1.05;
            }

            .wikcup-marker-text strong {
              font-size: 12px;
              letter-spacing: 0.8px;
            }

            .wikcup-marker-text span {
              margin-top: 3px;

              font-size: 10px;
              font-weight: 700;

              opacity: 0.7;
            }

            .wikcup-marker-point {
              position: absolute;

              bottom: -9px;
              left: 50%;

              width: 15px;
              height: 15px;

              background: #f8bb28;

              transform:
                translateX(-50%)
                rotate(45deg);

              border-right: 3px solid white;
              border-bottom: 3px solid white;
            }
          </style>
        `;

        const marker = new AdvancedMarkerElement({
          map,
          position: venue,
          title: "Wikrama Cup 2026",
          content: markerContent,
        });

        // =========================
        // INFO WINDOW
        // =========================

        const infoWindow = new InfoWindow({
          content: `
            <div style="
              width: 270px;
              padding: 5px;
              font-family: Arial, sans-serif;
            ">

              <div style="
                background:
                  linear-gradient(
                    135deg,
                    #f5931c,
                    #f8bb28
                  );

                padding: 15px;

                border-radius: 12px;

                color: #111827;

                margin-bottom: 12px;
              ">

                <div style="
                  font-size: 10px;
                  font-weight: 800;
                  letter-spacing: 2px;
                  margin-bottom: 5px;
                ">
                  OFFICIAL VENUE
                </div>

                <div style="
                  font-size: 20px;
                  font-weight: 900;
                ">
                  WIKRAMA CUP
                </div>

                <div style="
                  font-size: 13px;
                  font-weight: 700;
                  margin-top: 3px;
                ">
                  2026
                </div>

              </div>

              <div style="
                padding: 0 5px 5px;
              ">

                <div style="
                  color: #111827;
                  font-size: 15px;
                  font-weight: 800;
                  margin-bottom: 7px;
                ">
                  SMK Wikrama Bogor
                </div>

                <div style="
                  color: #64748b;
                  font-size: 12px;
                  line-height: 1.6;
                ">
                  Pusat kegiatan Wikrama Cup 2026.
                  <br>
                  Kompetisi olahraga & seni
                  antar SMP se-Bogor Raya.
                </div>

                <div style="
                  display: flex;
                  gap: 6px;
                  margin-top: 12px;
                ">

                  <span style="
                    background: #fff3d6;
                    color: #b45309;
                    padding: 5px 8px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                  ">
                    🏀 OLAHRAGA
                  </span>

                  <span style="
                    background: #fff3d6;
                    color: #b45309;
                    padding: 5px 8px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                  ">
                    🎤 SENI
                  </span>

                </div>

              </div>

            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open({
            map,
            anchor: marker,
          });
        });

        // =========================
        // VENUE AREA
        // =========================

        new google.maps.Circle({
          map,
          center: venue,

          radius: 150,

          fillColor: "#f5931c",
          fillOpacity: 0.12,

          strokeColor: "#f8bb28",
          strokeOpacity: 0.65,
          strokeWeight: 2,
        });

        // =========================
        // MAP LABEL
        // =========================

        const label = document.createElement("div");

        label.innerHTML = `
          <div style="
            background: rgba(7, 16, 42, 0.94);

            color: white;

            padding: 10px 15px;

            border-radius: 12px;

            border:
              1px solid
              rgba(248, 187, 40, 0.35);

            box-shadow:
              0 8px 25px
              rgba(0, 0, 0, 0.25);

            font-family: Arial, sans-serif;

            font-size: 12px;
          ">

            <span style="
              color: #f8bb28;
              font-weight: 900;
            ">
              ●
            </span>

            <strong style="
              margin-left: 6px;
            ">
              WIKRAMA CUP 2026
            </strong>

            <span style="
              display: block;
              color: #94a3b8;
              font-size: 10px;
              margin-top: 3px;
              margin-left: 14px;
            ">
              SMK Wikrama Bogor
            </span>

          </div>
        `;

        map.controls[
          google.maps.ControlPosition.LEFT_TOP
        ].push(label);

      } catch (error) {
        console.error(
          "Google Maps gagal dimuat:",
          error
        );
      }
    }

    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
      }}
    />
  );
}

export default GoogleMap;
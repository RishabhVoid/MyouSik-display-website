import folder_navigation from "../assets/folder_navigation.svg";
import playlist_editor from "../assets/playlist_editor.svg";
import randomizer from "../assets/randomizer.svg";

type FeatureTypeDef = {
  title: string;
  specialTitle: string;
  points: Array<string>;
  svg: string;
  svgAlt: string;
  reversed: boolean;
};

const FeaturesData: Array<FeatureTypeDef> = [
  {
    title: "Simplified ui with folder based ",
    specialTitle: "File navigation.",
    points: [
      "Load in multiple folders to navigate for audio files within them.",
      "Live folder view to see changes made in files in real-time",
      "Drag and drop to delete files quickly",
    ],
    svg: folder_navigation,
    svgAlt: "folder navigation",
    reversed: false,
  },
  {
    title: "Drag n drop editing with ",
    specialTitle: "Playlist editor.",
    points: [
      "Add and remove playlists whilst being able to edit them.",
      "Drag n drop audio files from all loaded folders to edit playlists.",
    ],
    svg: playlist_editor,
    svgAlt: "playlist editor",
    reversed: true,
  },
  {
    title: "Spice up your playlists with ",
    specialTitle: "Randomizer.",
    points: ["Get a random list of songs from the available loaded files"],
    svg: randomizer,
    svgAlt: "randomizer",
    reversed: false,
  },
];

export default FeaturesData;

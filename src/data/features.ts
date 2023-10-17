import folder_navigation from "../assets/folder_navigation.svg";
import playlist_editor from "../assets/playlist_editor.svg";
import randomizer from "../assets/randomizer.svg";

export type FeatureTypeDef = {
  title: string;
  specialTitle: string;
  secondTitle: string;
  tag: string;
  points: Array<string>;
  secondaryPoints: Array<string>;
  svg: string;
  svgAlt: string;
  reversed: boolean;
};

const FeaturesData: Array<FeatureTypeDef> = [
  {
    title: "Simplified UI with folder-based ",
    specialTitle: "File Navigation.",
    secondTitle: "Easy File Access",
    tag: "File navigation",
    points: [
      "Intuitive drag-and-drop interface for effortless file adding and playlist creation.",
      "Quick access to recently played songs and playlists for seamless playback.",
      "Effortlessly switch between folders and playlists with a single click.",
    ],
    secondaryPoints: [
      "Smart search functionality to find songs, playlists, and folders instantly.",
      "Create dynamic playlists that update automatically when new files are added.",
      "Visual audio waveform display for precise navigation within songs.",
    ],
    svg: folder_navigation,
    svgAlt: "folder navigation",
    reversed: false,
  },
  {
    title: "Drag-and-Drop Editing with ",
    specialTitle: "Playlist Editor.",
    secondTitle: "Effortless Playlist Management",
    tag: "Sleek ui",
    points: [
      "Create, edit, and save customized playlists with just a few clicks.",
      "Drag-and-drop audio files from loaded folders directly into playlists.",
      "Organize playlists effortlessly with intuitive playlist management tools.",
    ],
    secondaryPoints: [
      "Visualize playlist duration and file information for better curation.",
      "Playlist export feature for sharing your favorite playlists with friends.",
      "Customizable playback settings for each playlist, ensuring the perfect listening experience.",
    ],
    svg: playlist_editor,
    svgAlt: "playlist editor",
    reversed: true,
  },
  {
    title: "Spice Up Your Playlists with ",
    specialTitle: "Randomizer.",
    secondTitle: "Diverse Playlist Creation",
    tag: "Randomizer",
    points: [
      "Generate unique playlists with a click, adding an element of surprise to your music.",
      "Fine-tune random playlists by genre, artist, or other criteria to match your mood.",
      "Automatically remove duplicate songs, ensuring a diverse listening experience.",
    ],
    secondaryPoints: [
      "Interactive visualizer that synchronizes with the music, enhancing your listening pleasure.",
      "Create randomized playlists on-the-fly during parties or events for endless entertainment.",
      "Option to save and share your favorite randomized playlists for future enjoyment.",
    ],
    svg: randomizer,
    svgAlt: "randomizer",
    reversed: false,
  },
];

export default FeaturesData;

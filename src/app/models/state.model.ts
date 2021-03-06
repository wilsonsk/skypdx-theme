export class State {
  constructor(
    public featuredIsOpen: boolean,
    public gridIsOpen: boolean,
    public aboutIsOpen: boolean,
    public contactIsOpen: boolean,
    public didScroll: boolean,
    public browserWidth: number,
    public browserIsXs: boolean,  // b < 768px
    public browserIsSm: boolean,  // 768px <= b < 992px
    public browserIsMd: boolean,  // 992px <= b < 1200px
    public browserIsLg: boolean,  // b >= 1200px

    public isDroppeddown: boolean,

    public highlightArchitecture: boolean,
    public highlightInteriorSpace: boolean,
    public highlightComposite: boolean,
    public highlightPortrait: boolean,
    public highlightProduct: boolean,
    public highlightAbout: boolean,
    public highlightContact: boolean,
    public highlightMyGear: boolean
  ){}
}

# Photo slots

Any slot whose file is missing renders a labelled placeholder instead of a broken
image, so the site stays presentable while photos are being swapped.

`scripts\import-assets.ps1` copies the supplied `img1` .. `img11` set into place
under these names. It reads each file's signature rather than trusting its
extension, because attachments frequently arrive as `.png` while holding JPEG or
WebP bytes.

| Filename | Source | Used on |
| --- | --- | --- |
| `dalmatian-tub.jpg` | img4 | Home hero, Gallery |
| `senior-dog-tub.jpg` | img6 | Home self-service section, Gallery |
| `golden-rinse.jpg` | img8 | Services self-service tier, Gallery |
| `shih-tzu-groom.jpg` | img1 | Services full-service tier, Gallery |
| `shop-dog-relaxing.jpg` | img9 | Home about teaser, About page, Gallery |
| `shop-decor-tray.jpg` | img7 | Home about teaser, Gallery |
| `dalmatian-groomer.jpg` | img5 | Gallery |
| `dog-towel-duck.jpg` | img2 | Gallery |
| `dog-with-comb.jpg` | img3 | Gallery |
| `dog-teal-towel.webp` | img11 | Gallery |
| `spa-cucumber.webp` | img10 | Gallery |

The brand logo lives one level up, at `public/images/the-polished-pup-logo.png`.

Paths are defined in one place — `src/lib/content.ts` (`photos`) — so swapping a
file means editing that object and nothing else. Gallery ordering, alt text and
tile sizes live in the same file under `galleryItems`. If you replace a photo with
a different format, update its extension there to match.

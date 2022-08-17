/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import Support from 'assets/key-feature/support.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        {/* <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Image src={item.iconSrc} alt={item.altText} />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid> */}
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Image src={Support}></Image>
          <Heading as='h1' classname="h1">문의하기</Heading>
          <Box sx={styles.footer.menus}>
            {/* <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav> */}
          </Box>
          <Text sx={styles.footer.copyright}>
            주소: 전라북도 군산시 수송동 OO로-31<br/>
            연락처: 010-1234-5678<br/>
            카카오톡: @DS3110
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      backgroundColor: 'primary',
      borderRadius: 10,
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 7],
      pb: ['40px', null, '60px'],
      mb:['10px', null, '20px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    img: {
      mx: ['auto', null, 0],
      ml: ['auto', null, 'auto'],
      mr:['auto', null, 'auto'],
      mb: [1, null, -3],
      width: ['80px', null, null, '90px', null, '120px'],
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    h1:{
      color:"#fff",
      fontSize: ['28px',null,null, '35px'],
      mb:[-4, null, -3],
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: ['14px',null,null, '20px'],
      width: '100%',
      color:"#fff"
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};

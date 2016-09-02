export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('question', {path: ':id'}),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}

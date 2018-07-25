
var NotifierFormController = function () {
  this.bindHandlers();
};

NotifierFormController.prototype = {

  bindHandlers: function () {
    $('#addBranch').on('click', {controller: this}, this.addBranch);
    $('#deleteBranch').on('click', this.deleteBranch);
  },

  addBranch: function (target) {
    var controller = target.data.controller;
    //var branchName = $('#branchName').val();
    //var sha1 = $('#sha1').val();
    var branchName = 'wip-tdehler-testing';
    var sha1 = 'de8260bf0fc37b840a3fc7e4abceacae5f9e6983';
    var row = controller.generateRow(branchName, sha1);
    $('#overviewTbl').append(row);
    $('#branchName').val('');
  },

  generateRow: function (branchName, sha1) {
    var url = 'https://shaman.ceph.com/builds/ceph/' + branchName + '/' + sha1 + '/';
    var row =
        '<tr>' +
        '<td><input type="checkbox" id="select"></td>' +
        '<td>' + branchName + '</td>' +
        '<td>' + sha1 + '</td></tr>';
    return row;
  },

  deleteBranch: function () {
    $('#overviewTbl').find('input[id="select"]').each(function () {
      if($(this).prop('checked')) {
        $(this).parents('tr').remove();
      }
    });
  }
};

$(document).ready(function () {
  new NotifierFormController();
});